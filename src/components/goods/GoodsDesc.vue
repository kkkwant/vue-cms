<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>

    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        title: '商品详细描述',
        content: '<p>今夜这场胜利，使得巴萨在联赛中连续四个赛季在伯纳乌获胜。在西甲创立以来，这还是破天荒的第一回。在15/16赛季中，皇马主场0-4溃败给巴萨，贝尼特斯很快下课。在16/17赛季中，巴萨主场2-3落败，梅西在终场前上演绝杀梅开二度。在上赛季中，皇马主场0-3惨败，卡瓦哈尔染红离场。今夜，皇马又在主场输了个0-1。</p>'
      } // 图文数据
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    getGoodsDesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
          }
        });
    }
  }
};
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
