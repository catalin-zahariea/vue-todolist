var app = new Vue({
  el: "#root",

  data: {
    newTodo: {
      text: "",
    },
    todoItems: [
      {
        text: "Fare i compiti",
      },
      {
        text: "Fare la spesa",
      },
      {
        text: "Fare il bucato",
      },
    ],
  },

  methods: {
    addItem() {
      if (this.newTodo.text.length > 0) {
        this.todoItems.push({ text: this.newTodo.text });
        this.newTodo.text = "";
      }
    },

    deleteItem(index) {
      this.todoItems.splice(index, 1);
    },
  },
});
