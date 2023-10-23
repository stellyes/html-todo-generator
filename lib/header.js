const Component = require("./component");
const Date = require("./date");

class Header extends Component {
  //   super() {}

  render() {
    // come back to this
    return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`;
  }
}
