<template>
  <div class="columns">
    <!--文章详情-->
    <div class="column is-three-quarters">
      <!--主题-->
      <el-card
        class="box-card"
        shadow="never"
      >
      
        <div
          slot="header"
          class="has-text-centered"
        >
          <p class="is-size-5 has-text-weight-bold">{{ post.title }}</p>
          <div class="has-text-grey is-size-7 mt-3">
            <span>{{ dayjs(post.createTime).format('YYYY/MM/DD HH:mm:ss') }}</span>
            <el-divider direction="vertical" />
            <span>发布者：{{ postUser.alias }}</span>
            <el-divider direction="vertical" />
            <span>查看：{{ post.view }}</span>
          </div>
        </div>

        <!--Markdown-->
        <div id="preview" />

        <!--标签-->
        <nav class="level has-text-grey is-size-7 mt-6">
          <div class="level-left">
            <p class="level-item">
              <b-taglist>
                <router-link
                  v-for="(tag, index) in tags"
                  :key="index"
                  :to="{ name: 'tag', params: { name: tag.name } }"
                >
                  <b-tag type="is-info is-light mr-1">
                    {{ "#" + tag.name }}
                  </b-tag>
                </router-link>
              </b-taglist>
            </p>
          </div>
          <div
            v-if="token && user.id === postUser.id"
            class="level-right"
          >
            <router-link
              class="level-item"
              :to="{name:'post-edit',params: {id:post.id}}"
            >
              <span class="tag">编辑</span>
            </router-link>
            <a class="level-item">
              <span
                class="tag"
                @click="handleDelete(post.id)"
              >删除</span>
            </a>
          </div>
        </nav>
      </el-card>

    <Lv-comments :slug="post.id" /> 
    </div>

    <div class="column">
        作者信息
        <!--作者-->
      <Author
        v-if="flag"
        :user="postUser"
      />
      <!--推荐-->
      <Recommend
        v-if="flag"
        :post-id="post.id"
      />
    </div>
  </div>
</template>

<script>
import { deletePost, getPost } from '@/api/post'
import { mapGetters } from 'vuex'
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import Author from '@/views/post/Author'
import Recommend from '@/views/post/Recommend'
import LvComments from '@/components/Comment/Comments'
export default {
  name: 'PostDetail',
  components: { Author, Recommend, LvComments },
  computed: {
    ...mapGetters([
      'token','user'
    ])
  },
  data() {
    return {
      flag: false,
      post: {
        content: '',
        id: this.$route.params.id
      },
      tags: [],
      postUser: {}
    }
  },
  mounted() {
    this.fetchPosts()
  },
  methods: {
    renderMarkdown(md) {
      Vditor.preview(document.getElementById('preview'), md, {
        hljs: { style: 'github' }
      })
    },
    // 初始化
    async fetchPosts() {
      getPost(this.$route.params.id).then(response => {
        const { data } = response
        document.title = data.post.title
        this.post = data.post
        this.tags = data.tags
        this.postUser = data.user
        // this.comments = data.comments
        this.renderMarkdown(this.post.content)
        this.flag = true
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
          setTimeout(() => {
            this.$router.push({ path: '/' })
          }, 500)
        }
      })
    }
  }
}
</script>

<style>
#preview {
  min-height: 300px;
}
</style>