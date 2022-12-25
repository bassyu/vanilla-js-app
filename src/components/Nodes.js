class Nodes {
  constructor({ parent }) {
    this.state = {
      isRoot: true,
      nodes: [],
    };

    this.component = document.createElement('div');
    this.component.className = 'Nodes';

    parent.appendChild(this.component);
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.component.innerHTML = `
      ${this.state.isRoot ? '' : '<div class="Node"><img src="./assets/prev.png"></div>'}
      ${this.state.nodes
        .map(
          (node) => `
            <div class="Node" id="${node.id}">
              <img src="${node.type === 'FILE' ? node.filePath : './assets/directory.png'}">
              <div>${node.name}</div>
            </div>
          `
        )
        .join('')}
    `;
  }
}

export default Nodes;
