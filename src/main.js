import Vue from 'vue'
import App from './App.vue'
import "@/assets/fonts/iconfont.css"//字体样式文件
import '@/mobile/flexible'//自动适应宽度
import "@/styles/reset.css"//初始化标签默认样式
import router from '@/router';
// 全局注册vant组件(按需引入)
import { NavBar, Tabbar, TabbarItem ,Col, Row,Image as VanImage,Cell, CellGroup, Icon,Search} from 'vant';
// 注册
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
// 防止与images重名
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
