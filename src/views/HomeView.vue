<template>
<div>
  <div class="box">
      🔔 {{billboard.content}}
  </div>
  <div class="columns">
    <div class="column is-three-quarters">
      <PostList>

      </PostList>
    </div>
    <div class="column">
      <CardBar></CardBar>
    </div>
  </div>
</div>
</template>

<script>
import CardBar from "@/views/card/CardBar"
import PostList from '@/views/post/Index'
import {getBillboard} from "@/api/billboard"
export default {
  name: 'HomeView',
  components: {CardBar, PostList},
  data(){
    return{
      billboard: {
        content: ''
      }
    }
  },
  created() {
    this.fetchBillboard()
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>
