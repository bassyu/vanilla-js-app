import Breadcrumb from './components/Breadcrumb.js';

class App {
  constructor({ parent, initialState }) {
    this.state = initialState;
    this.component = document.createElement('div');

    parent.appendChild(this.component);
  }

  render() {
    new Breadcrumb({ parent: this.component }).render();
  }
}

export default App;
