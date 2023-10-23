const Component = require("./component");

class TaskListItem extends Component {
  constructor(task,priority) {
    super();
    // for (const child of this.children) {
    //   child.priority = this.priority;
    // }
    this.task=task;
    this.priority=priority;
  }

  render() {
    // for (const child of this.children) {
      if (this.priority) {
        return `<li class="tasks-item task-item-priority">${this.task}</li>`;
      } else {
        return `<li class="tasks-item">${this.task}</li>`;
      }
    // }
  }
}

module.exports=TaskListItem;