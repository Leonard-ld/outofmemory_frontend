<template>
  <div class="member">
    <div class="columns">
      <div class="column is-one-quarter">
        <el-card shadow="never">
          <div slot="header" class="has-text-centered">
            <el-avatar :size="64" :src="`https://cn.gravatar.com/avatar/${postUser.id}?s=164&d=monsterid`" />
            <p class="mt-3">{{ postUser.alias || postUser.username }}</p>
          </div>
          <div>
            <p class="content">积分：<code>{{ postUser.score }}</code></p>
            <p class="content">入驻：{{ dayjs(postUser.createTime).format("YYYY/MM/DD HH:MM:ss") }}</p>
            <p class="content">简介：{{ postUser.bio }}</p>
          </div>
        </el-card>
      </div>

      <div class="column">
        <!--用户发布的话题-->
        <el-card class="box-card content" shadow="never">
          <div slot="header" class="has-text-weight-bold">
            <span>话题</span>
          </div>

          <div v-if="posts.length===0">
            暂无话题
          </div>

          <div v-else class="postUser-info">
            <article v-for="(item, index) in posts" :key="index" class="media">
              <div class="media-content">
                <div class="content ellipsis is-ellipsis-1">
                  <el-tooltip class="item" effect="dark" :content="item.title" placement="top">
                    <router-link :to="{ name: 'post-detail', params: { id: item.id } }">
                      {{ item.title }}
                    </router-link>
                  </el-tooltip>
                </div>
                <nav class="level has-text-grey is-size-7">
                  <div class="level-left">
                    <span class="mr-1">
                      发布于:{{ dayjs(item.createTime).format("YYYY/MM/DD HH:mm:ss") }}
                    </span>
                  </div>
                </nav>
              </div>
              <div v-if="token" class="media-right">
                <div v-if="postUser.username === user.username" class="level">
                  <div class="level-item mr-1">
                    <router-link :to="{name:'post-edit',params: {id:item.id}}">
                      <span class="tag is-warning">编辑</span>
                    </router-link>
                  </div>
                  <div class="level-item">
                    <a @click="handleDelete(item.id)">
                      <span class="tag is-danger">删除</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!--分页-->
          <pagination
            v-show="page.total > 0"
            class="mt-5"
            :total="page.total"
            :page.sync="page.current"
            :limit.sync="page.size"
            @pagination="fetchUserById"
          />
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getInfoByName } from '@/api/user'
import pagination from '@/components/Pagination/index'
import { mapGetters } from 'vuex'
import { deletePost } from '@/api/post'

export default {
  name: 'Profile',
  components: { pagination },
  data() {
    return {
      postUser: {},
      posts: {},
      page: {
        current: 1,
        size: 5,
        total: 0
      }
    }
  },
  computed: {
    ...mapGetters(['token', 'user'])
  },
  created() {
    this.fetchUserById()
  },
  methods: {
    fetchUserById() {
      getInfoByName(this.$route.params.username, this.page.current, this.page.size).then((res) => {
        const { data } = res
        this.postUser = data.user
        this.page.current = data.posts.current
        this.page.size = data.posts.size
        this.page.total = data.posts.total
        this.posts = data.posts.records
      })
    },
    handleDelete(id) {
      deletePost(id).then(value => {
        const { code, message } = value
        this.$message({
                message: message,
                type: "success",
                duration: 2000,
              });

        if (code === 200) {
          this.$router.go(0)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
