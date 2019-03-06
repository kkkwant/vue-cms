<template>
  <div>
    
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>

  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: [
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
        {
          'id':12,
          'img_url': 'http://pic27.nipic.com/20130329/890845_115317964000_2.jpg',
          'click':2,
          'title':'初始化第一个列表',
          'add_time':'2018-02-06T11:59:22+08:00'
        },
      ] // 新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      // 获取新闻列表
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          // 如果没有失败，应该把数据保存到 data 上
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
