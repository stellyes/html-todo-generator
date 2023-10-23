const Component = require("./component");

class TaskListItem extends Component {
  constructor(priority, children = []) {
    for (const child in this.children) {
      child.priority = this.priority;
    }
  }

  render() {
    for (const child of this.children) {
      if (child.priority) {
        return `<li class="tasks-item task-item-priority">{INNER_HTML}</li>`;
      } else {
        return `<li class="tasks-item">{INNER_HTML}</li>`;
      }
    }
  }
}
