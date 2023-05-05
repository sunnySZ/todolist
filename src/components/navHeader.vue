<template>
  <div>
   
  <input placeholder="请输入名称" v-model="value" @keydown.enter="enter" />
    
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'navHeader',
  setup(props,ctx){
    let value=ref('')
    let enter=()=>{
      // 分发事件传值给父组件
      ctx.emit('add',value.value)

      // 提交后清空输入框
      value.value=''
    }
    return{
      value,
      enter
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
