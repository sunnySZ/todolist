<template>
  <div>
    <Header @add="addFn"></Header>
    <Main :list="list" @del="delFn"></Main>
    <Footer :list="list" @clear="clearFn"></Footer>
    <!-- <button @click="goto">点击到about</button> -->
  </div>
</template>

<script>
import Footer from '@/components/navFooter.vue'
import Header from '@/components/navHeader.vue'
import Main from '@/components/navMain.vue'
import {defineComponent,computed,ref} from 'vue'
import {useStore} from 'vuex'
import { useRouter,useRoute} from 'vue-router'
export default defineComponent({
  name: 'homeView', //组件名称
  props: { // 接受父组件数据
    msg: String
  },
  // 定义子组件
  components:{
    Footer,
    Header,
    Main
  },
  setup(){
    // let num=ref(66)
    // let name=ref('test')
    // let data=reactive({
    //   num:10,
    //   name:'jack'
    // })

    let store=useStore()
    let list=computed(()=>{
      // 通过propos传给子组件
      return store.state.list
    })
    let value=ref('')
    // 添加任务
    let addFn=(val)=>{
      value.value=val
      console.log('接收子组件传来的值',val)
      let flag=true;
      // 去重判断,计算属性取值有value
      list.value.map((item)=>{
          if(item.title===val){
            flag=false
            alert('任务已存在')
          }
      })

      if(flag){
      // 调用mutations
      store.commit('addToDo',{
          title:val,
          complete:false
        })
      }
    }

    // 删除任务
    let delFn=(val)=>{
       store.commit('delToDo',val)
       console.log('删除',val)
    }

    // 清除任务
    let clearFn=(val)=>{
      console.log('清除已完成',val)
       store.commit('clear',val)
     
    }




    // router是全局路由对象
    let router=useRouter()

    // route是当前路由对象,获取传承
    const route=useRoute();

console.log('当前路由参数---params',route.params)
console.log('当前路由参数---query',route.query)

    //query传递过来的参数值都是字符串类型

    // push里可以直接传入跳转的路径
    // back回到上一页
    // forward到下一页去
    // go(整数)，正整数前进，负整数后退

    let goto=()=>{

      router.push({
        path:'/about'
      })
    }






    return{
      //  num,
      //  name,
      //  ...toRefs(data),
       list,
       goto,
       addFn,
       delFn,
       clearFn,
       value
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
