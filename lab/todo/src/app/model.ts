/*var model = {
    user: "Adam",
    items: [
        {Action: "Buy Flowers", Done: false},
        {Action: "Get Shoes", Done: false},
        {Action: "Collect Tickets", Done: true},
        {Action: "Call Joe", Done: false}
    ]
};*/
//In ES6.0 syntax for JavaScript
export class Model {
    user;
    items;
    constructor() {
        this.user = "Adam";
        this.items=[
            new ToDoItem("Buy Flowers",false),
            new ToDoItem("Get Shoes",false),
            new ToDoItem("Collect Tickets",true),
            new ToDoItem("Call Joe",false)
        ];
    }
}

export class ToDoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}