class Breadcrumb {
  constructor({ parent }) {
    this.state = [];
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
      ${this.state.map((node, index) => `<div id="${index}">${node}</div>`)}
    `;
  }
}

export default Breadcrumb;
