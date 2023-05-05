<template>
  <div>
   aboutss
    <button @click="back">返回</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'aboutView',
  setup(){
    const router=useRouter()
    const back=()=>{
     // router.back()
     router.go(-1)
    }


    return{
      back
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
