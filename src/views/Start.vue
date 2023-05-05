<template>
    <div>
      <button @click="start">开始任务</button>
    </div>
  </template>
  
  <script>
  import {defineComponent,ref} from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'startView',
    setup(){
      let num=ref(10)
      let obj=ref({
        a:1,
        b:2
      })



     // router是全局路由对象
      const router=useRouter();
        

      const start=()=>{
       // push如果是对象的形式就可以传递参数
       // push里可以直接传入name,name是路由的名字
       // query传参，path,name属性都可以
       // params传参,只能用name属性不能用path
   
    //    router.push({
    //     path:'/home',
    //     query:{//home?num=10&obj={"a":1,"b":2}
    //         num:num.value,
    //         obj:JSON.stringify(obj.value)
    //     }
    //    })
    
    router.push({
        name:'Home',
        params:{
            num:1,
            obj:JSON.stringify(obj.value)
        }
       })

      }
      
      
  
      return{
        num,
        obj,
        start
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  