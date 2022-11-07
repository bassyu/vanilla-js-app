class App {
  constructor({ parent, initialState }) {
    this.state = initialState;
    this.component = document.createElement('div');

    parent.appendChild(this.component);
  }

  render() {
    this.component.innerHTML = `
      <h1>wowowowowo</h1>
    `;
  }
}

export default App;
