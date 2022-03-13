<template>
  <article class="media">
    <figure class="media-left image is-48x48">
      <img :src="`https://cravatar.cn/avatar/${comment.userId}31b6f0addc72b039b94122a4.png?s=200&d=robohash&f=y`">
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.username }}</strong>
          <small class="ml-2">{{ comment.createTime | date }}</small>
          <br />
          {{ comment.content }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'LvCommentsItem',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>