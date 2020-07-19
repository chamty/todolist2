'use strict';

{
  const vm = new Vue({
    el: '#app',
    data: {
      newItemTitle: '', //入力欄の初期値
      isChecked: false,
      items: [],
      dones: [],
  },
  methods: {
    addTodo() {
      if (!this.newItemTitle) {
        return;
      }
      this.items.push({
        title: this.newItemTitle,
        isChecked: false
      });
      this.newItemTitle = ''; //入力欄を初期値に戻す
    },
    doneTodo(index) {
      let doneTodo = this.items[index].title;
      this.items.splice(index, 1);
      this.dones.push({
        title: doneTodo,
        isChecked: true
      });
    },
    returnTodo(index) {
      let returnTodo = this.dones[index].title;
      this.dones.splice(index, 1);
      this.items.push({
        title: returnTodo,
        isChecked: false
      });
    },
    deleteTodo_item(index) {
      this.items.splice(index, 1);
    },
    deleteTodo_done(index) {
      this.dones.splice(index, 1);
    },
  }
})

}