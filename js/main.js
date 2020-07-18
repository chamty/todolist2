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
      this.saveTodo(); //ブラウザに保存
    },
    deleteTodo(index) {
      let doneTodo = this.items[index].title;
      this.items.splice(index, 1);
      this.dones.push({
        title: doneTodo,
        isChecked: true
      });
      this.saveTodo(); //ブラウザに保存
    },
    saveTodo() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
    loadTodo() {
      this.items = JSON.parse( localStorage.getItem('items') );
      if( !this.items ){
        this.items = [];
      }
    },
    mounted() {
      this.loadTodo();
    },
  }
})

}