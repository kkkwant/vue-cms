<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
// 1. 导入 评论子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':3,
          'title':'第一个列表详情',
          'add_time':'2018-02-16T11:59:22+08:00',
          'content': '<p>今夜这场胜利，使得巴萨在联赛中连续四个赛季在伯纳乌获胜。在西甲创立以来，这还是破天荒的第一回。在15/16赛季中，皇马主场0-4溃败给巴萨，贝尼特斯很快下课。在16/17赛季中，巴萨主场2-3落败，梅西在终场前上演绝杀梅开二度。在上赛季中，皇马主场0-3惨败，卡瓦哈尔染红离场。今夜，皇马又在主场输了个0-1。</p>',
        }
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    }
  },
  components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }
};
</script>

<style lang="scss">
//图片出现问题，把scope去掉就ok，但这样可能污染全局样式，这里都在.newsinfo-container里，所以不污染
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
