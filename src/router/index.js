import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'



// 路由配置数组
// path路由路径，必须'/'开头
// component 对应路由组件
// name 路由名字
const routes=[
    {
        path:'/',
        name:'Start',
        component:()=>import('@/views/Start.vue')// 按需引入
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
       path:'/about',
       name:'About',
       component:()=>import('@/views/About.vue')// 按需引入
     },

]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router