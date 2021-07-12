<template>
  <div id="app">
    <todo-header/>
    <todo-input v-on:addTodoItem="addOneItem"/>
    <todo-list v-bind:propsdata="todoItems" 
              v-on:removeItem="removeOneItem" 
              v-on:toggleItem="toggleOneItme"
    />
    <todo-footer/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems :[]
    }
  },
  methods: {
    addOneItem(todoItem) {
       var obj = {complete: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem,index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1);
    },
    toggleOneItme(todoItem,index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    }
  },
  created() {
    //인스턴스 생성되자 마자 실행하는 훅
   if(localStorage.length > 0) {
     for(var i = 0; i<localStorage.length; i++) {
       if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
       }
     }
   }
  },
  components: { 
    TodoHeader, 
    TodoInput, 
    TodoList, 
    TodoFooter 
    },
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}

input{
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>