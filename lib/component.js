class Component {
  constructor(children = []) {
    this.children = children;
  }

  render() {
    throw new Error("Child class must implement render()");
  }

  renderInnerHTML() {
    for (const child of this.children) {
      child.render();
    }
  }
}

module.exports = Component;
