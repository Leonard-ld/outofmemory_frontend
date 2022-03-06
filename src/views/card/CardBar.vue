<template>
  <section>
    <!--是否登录-->
    <LoginWelcome/>

    <!--今日赠言-->
    <TipCard/>

    <!--资源推介-->
    <PromotionCard />
  </section>
</template>

<script>
import TipCard from '@/views/card/Tip'
import PromotionCard from '@/views/card/Promotion'
import LoginWelcome from '@/views/card/LoginWelcome'

export default {
  name: 'CardBar',
  components: { LoginWelcome, PromotionCard, TipCard }
}
</script>

<style scoped>
</style>
