var app = new Vue({
  el: "#app",
  data: {
    id: 1, // 自增，确保能快速找到数据
    todo: '', // 双向绑定输入框
    todoInfos: [
      // 已不需要，注释掉
      // {
      //   id: 10, // id 唯一且自增
      //   isChecked: false, // 未完成和放弃为 false，完成为 true
      //   todoTitle: "敌军 1", // todo 标题
      //   state: 0, // 0 - 未完成，1 - 完成，2 - 放弃完成
      // },
    ]
  },
  methods: {
    addTodoItem() {
      // 每次点击，往数组中添加一组数据
      this.todoInfos.push({
        id: this.id,
        isChecked: false,
        todoTitle: this.todo,
        state: 0
      })
      // id 自增
      this.id++;
    }
  }
})