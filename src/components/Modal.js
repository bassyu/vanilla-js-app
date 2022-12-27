const IMAGE_PATH_PREFIX =
  'https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public';

class Modal {
  constructor({ parent, onClickModal }) {
    this.state = {
      filePath: null,
    };

    this.component = document.createElement('div');
    this.component.className = 'Modal';
    this.component.addEventListener('click', onClickModal);
    parent.appendChild(this.component);

    this.render();
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }

  render() {
    this.component.innerHTML = `
      <div class="content">
        <img src="${
          this.state.filePath === 'loading'
            ? './assets/nyan-cat.gif'
            : `${IMAGE_PATH_PREFIX}${this.state.filePath}`
        }">
      </div>
    `;

    this.component.className = `Modal ${this.state.filePath === 'loading' ? 'Loading' : 'Image'}`;
    this.component.style.display = this.state.filePath === null ? 'none' : 'block';
  }
}

export default Modal;
