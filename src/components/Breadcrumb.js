class Breadcrumb {
  constructor({ parent, onClickPathName }) {
    this.state = {
      path: [],
    };

    this.component = document.createElement('nav');
    this.component.className = 'Breadcrumb';
    parent.appendChild(this.component);

    this.onClickPathName = onClickPathName;
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.component.innerHTML = `
      <div class="pathName" id="root">root</div>
      ${this.state.path
        .map((node, index) => `<div class="pathName" id="${index}">${node.name}</div>`)
        .join('')}
    `;

    this.component.querySelectorAll('.pathName').forEach((pathName) => {
      pathName.addEventListener('click', this.onClickPathName);
    });
  }
}

export default Breadcrumb;
