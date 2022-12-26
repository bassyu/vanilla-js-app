const IMAGE_PATH_PREFIX =
  'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public';

class Modal {
  constructor({ parent }) {
    this.state = {
      filePath: 'loading',
    };

    this.component = document.createElement('div');
    this.component.className = 'Modal';
    parent.appendChild(this.component);

    this.render();
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    console.log(this.state);
    this.component.innerHTML = `
      <div class="content">
        <img src="${
          this.state.filePath === 'loading'
            ? './assets/nyan-cat.gif'
            : `${IMAGE_PATH_PREFIX}${this.state.filePath}`
        }">
      </div>
    `;

    this.component.style.display = this.state.filePath ? 'block' : 'none';
  }
}

export default Modal;
