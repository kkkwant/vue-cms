// 入口文件
import Vue from 'vue'
//使用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateJSON = true;  // 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded

// 导入格式化时间的插件
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
	return moment(dataStr).format(pattern)
})


//导入css
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   
// import { Header, Swipe, SwipeItem, Button} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button)
import MintUI from 'mint-ui'
Vue.use(MintUI)



import router from './router.js'   // 1.3 导入自己的 router.js 路由模块
import app from './App.vue'  	// 导入 App 根组件


var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})