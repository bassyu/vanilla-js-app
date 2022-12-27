class Nodes {
  constructor({ parent, onClickNode }) {
    this.state = {
      isRoot: true,
      nodes: [],
    };

    this.component = document.createElement('div');
    this.component.className = 'Nodes';
    parent.appendChild(this.component);

    this.onClickNode = onClickNode;
  }

  setState(newState) {
    this.state = newState;
    this.render();
    console.log(this.state);
  }

  render() {
    console.log('render', this.state);
    this.component.innerHTML = `
      ${this.state.isRoot ? '' : '<div class="Node"><img src="./assets/prev.png"></div>'}
      ${this.state.nodes
        .map(
          (node) => `
            <div class="Node" id="${node.id}">
              <img src="${node.type === 'FILE' ? './assets/file.png' : './assets/directory.png'}">
              <div>${node.name}</div>
            </div>
          `
        )
        .join('')}
    `;

    this.component.querySelectorAll('.Node').forEach((nodeElement) => {
      nodeElement.addEventListener('click', this.onClickNode);
    });
  }
}

export default Nodes;
