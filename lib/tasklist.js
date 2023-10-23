const Component = require("./component");

class TaskList extends Component {
  // constructor(children = []) {
  //   this.children = children;
  // }

  render() {
    return `<ul class="tasks">{INNER_HTML}</ul>`;
  }
}

module.exports=TaskList;