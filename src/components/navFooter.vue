<template>
  <div>
     <div>已完成{{ isComplete }} / {{ list.length }}</div>
     <div v-if="isComplete>0"><button @click="clear">清除已完成</button></div>
  </div>
</template>

<script>
import {defineComponent,computed} from 'vue'
export default defineComponent({
  name: 'navFooter',
  props:{
    list:{
      type:Array,
      require:true
    }
  },
  setup(props,ctx){
    let isComplete=computed(()=>{
      let arr=props.list.filter((item)=>{
           return item.complete
      })
      return arr.length
    })

    // 过滤清除已完成，留下未完成
    let clear=()=>{
  
      let arr=props.list.filter((item)=>{
           return item.complete===false
      })

      console.log(1222,arr)

      ctx.emit('clear',arr)

    }
    return{
      isComplete,
      clear
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
