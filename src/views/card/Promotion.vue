<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥂 友情链接</span>
    </div>
    <div>
      <p v-for="(item, index) in list" :key="index" class="block">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </p>
    </div>
  </el-card>
</template>

<script>
import {getPromotion} from '@/api/promotion'

export default {
  name: 'Promotion',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.fetchPromotion()
  },
  methods: {
    fetchPromotion(){
      getPromotion().then(res=>{
        const { data } = res
      this.list = data
    })
    }
  }
}
</script>

<style scoped>
</style>
