<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
// 引入 nanoid 用于生成一个唯一id
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  //接收从App传递过来的addTodo
  data() {
    return {
      title: "",
    };
  },
  // props: ["addTodo"],
  methods: {
    add() {
      if (this.title.trim() === "") {
        return false;
      }
      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false,
        isEdit: false,
      };

      // this.addTodo(todoObj);
      this.$emit("addTodo", todoObj);
      this.title = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>