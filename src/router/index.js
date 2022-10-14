import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
import Comment from '@/views/Comment'
//对外暴露VueRouter类的实例
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/Layout",
        },
        {
            path: "/Layout",
            redirect: "/Layout/home",
            component: Layout,
            children: [
                {
                    path: "Home",
                    component: Home,
                    meta: {
                        title: "首页"
                    }
                },
                {
                    path: "Search",
                    component: Search,
                    meta: {
                        title: "搜索"
                    }
                }
            ]
        },
        {
            path: "/Play",
            component: Play,
        },
        {
            path: "/Comment",
            component: Comment,
        }

    ]
})
