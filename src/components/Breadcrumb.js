class Breadcrumb {
  constructor({ parent }) {
    this.state = {
      path: [],
    };

    this.component = document.createElement('nav');
    this.component.className = 'Breadcrumb';

    parent.appendChild(this.component);
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.component.innerHTML = `
      <div>root</div>
      ${this.state.path.map((node, index) => `<div id="${index}">${node.name}</div>`).join('')}
    `;
  }
}

export default Breadcrumb;
