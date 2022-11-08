class Breadcrumb {
  constructor({ parent, initialState }) {
    this.state = initialState;
    this.component = document.createElement('div');
    this.component.className = 'Breadcrumb';

    parent.appendChild(this.component);
  }

  render() {
    this.component.innerHTML = `
      <div>root</div>
      <div>노란고양이</div>
    `;
  }
}

export default Breadcrumb;
