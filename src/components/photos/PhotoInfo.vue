<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
// 1. 导入评论子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, // 从路由中获取到的 图片Id
      photoinfo: {
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':3,
          'title':'详情标题',
          'add_time':'2018-02-16T11:59:22+08:00',
          'content': '<p>今夜这场胜利，使得巴萨在联赛中连续四个赛季在伯纳乌获胜。在西甲创立以来，这还是破天荒的第一回。在15/16赛季中，皇马主场0-4溃败给巴萨，贝尼特斯很快下课。在16/17赛季中，巴萨主场2-3落败，梅西在终场前上演绝杀梅开二度。在上赛季中，皇马主场0-3惨败，卡瓦哈尔染红离场。今夜，皇马又在主场输了个0-1。</p>',
        }, // 图片详情
      list: [
        {
          w : 600,
          h : 400,
          src : 'http://pic.qiantucdn.com/58pic/19/42/08/56958PIC73j_1024.jpg' 
        },
        {
          w : 600,
          h : 400,
          src : 'http://www.sucaitianxia.com/sheji/pic/200707/20070723160945961.jpg' 
        },
        {
          w : 600,
          h : 400,
          src : 'http://sc.jb51.net/uploads/allimg/131012/2-131012021A45L.jpg' 
        },        
      ] // 缩略图的数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      });
    }
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs{
    img{
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
