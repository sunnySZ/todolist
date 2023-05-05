import {createStore} from 'vuex'
export default createStore({
    state:{ // 定义所需的状态
      list:[
        {
          title:'吃饭',
          complete:false
        },
        {
          title:'睡觉',
          complete:false
        },
        {
          title:'敲代码',
          complete:true
        }
      ]
    },
    mutations:{// 同步修改state，都是自定义的方法
      addToDo(state,payload){
        state.list.push(payload)
      },
      delToDo(state,payload){
        // 删除任务splice(下标,个数)
        state.list.splice(payload,1)
      },
      clear(state,payload){
        console.log('clear',payload)
        // 传入过滤之后的数组
        state.list=payload
      }
    },
    actions:{ // 异步提交mutations

    },
    modules:{// 模块化处理

    }
})