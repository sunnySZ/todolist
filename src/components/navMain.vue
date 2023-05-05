<template>
  <div>
    <div v-if="list.length>0">
      <div v-for="(item,index) in list" :key="index">
      <div class="items">
        <input type="checkbox" v-model="item.complete" />
        {{ item.title }}
        <button @click="del(item,index)">删除</button>
      </div>
  </div>
    </div>
    <div v-else>暂无任务</div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
// import { useStore } from 'vuex'
export default defineComponent({
  name: 'navMain',
  props:{
    list:{
      type:Array,
      require:true
    }
  },
  emits:['del'],
  setup(props,ctx){
    // let store=useStore()
    // let list=computed(()=>{
    //   return store.state.list
    // })

    let del=(item,index)=>{
      ctx.emit('del',index)
   //   console.log(item,index)
    }
    return{
      del
    }

  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items{

  height: 35px;
  line-height: 5px;
  position: relative;

}
.items button{
    position:absolute;
    right: 20px;
    top:6px;
    display: none;
    z-index: 99;
  }
  .items:hover button{
    display: block;
  }
</style>
