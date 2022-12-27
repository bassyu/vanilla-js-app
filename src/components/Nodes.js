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
  }

  render() {
    this.component.innerHTML = `
      ${this.state.isRoot ? '' : '<div class="Node" id="back"><img src="./assets/prev.png"></div>'}
      ${this.state.nodes
        .map(
          (node) => `
            <div class="Node" id="${node.id}">
              <img src="./assets/${node.type === 'FILE' ? 'file.png' : 'directory.png'}">
              <div>${node.name}</div>
            </div>
          `
        )
        .join('')}
    `;

    this.component.querySelectorAll('.Node').forEach((node) => {
      node.addEventListener('click', this.onClickNode);
    });
  }
}

export default Nodes;
