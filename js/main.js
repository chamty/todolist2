'use strict';

{
  const vm = new Vue({
    el: '#app',
    data: {
      newItemTitle: '', //入力欄の初期値
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
    deleteTodo(index) {
      if (items) {
      let deleteTodo = this.items[index].title;
      this.items.slice(index, 1);
      }
      if (dones) {
      let deleteTodo = this.dones[index].title;
      this.dones.slice(index, 1);
      }
    },
  }
})

}