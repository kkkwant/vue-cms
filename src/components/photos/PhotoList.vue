<template>
  <div>
    
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
// 1. 导入 mui 的js文件
 import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [
        { title: "全部", id: 0 },
        { title: "推荐", id: 1 },
        { title: "热点", id: 2 },
        { title: "北京", id: 3 },
        { title: "社会上", id: 4 },
        { title: "娱乐", id: 5 },
      ], // 所有分类的列表数组
      list: [
        { 
          title: "娱乐", 
          id: 5, 
          img_url: 'http://img5.imgtn.bdimg.com/it/u=746215187,1522527078&fm=26&gp=0.jpg',
          zhaiyao: '回想到很多年前我刚参加工作时的面试经历' 
        },
        { 
          title: "哈哈", 
          id: 5, 
          img_url: 'http://pic3.nipic.com/20090702/918855_174429094_2.jpg',
          zhaiyao: '此前被商船撞沉的挪威海军“英斯塔”号护卫舰，于水中沉没了4个月后，在两艘浮吊船“格列佛”号和“拉姆比茨”号的联合努力下，被成功打捞出水。' 
        },
        { 
          title: "压力硝烟厅", 
          id: 5, 
          img_url: 'http://pic31.nipic.com/20130723/7764111_154348010000_2.jpg',
          zhaiyao: '来自中国的女子草量级选手张伟丽，经过3回合，判定击败官方排名第7位的特西娅-托雷斯，在排名进入UFC排名前十的同时，也创造了中国选手征战UFC的最佳战绩。' 
        },
        { 
          title: "流星火雨", 
          id: 5, 
          img_url: 'http://pic.qiantucdn.com/58pic/15/75/48/40f58PICzpi_1024.jpg',
          zhaiyao: '在排名进入UFC排名前十的同时，也创造了中国选手征战UFC的最佳战绩。' 
        }
      ] // 图片列表的数组
    };
  },
  created() {
    this.getAllCategory();
    // 默认进入页面，就主动请求 所有图片列表的数据
    this.getPhotoListByCateId(0);
  },
  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          // 手动拼接出一个最完整的 分类列表
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    //mint手册里抓的样式
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
