import Breadcrumb from './components/Breadcrumb.js';
import { request } from './lib/api.js';

class App {
  constructor({ parent }) {
    this.state = {
      isRoot: true,
      path: [],
      nodes: [],
    };

    this.breadcrumb = new Breadcrumb({ parent });

    this.callAPI();
  }

  setState(newState) {
    this.state = newState;
    this.breadcrumb.setState({ path: newState.path });
  }

  async callAPI() {
    const nodes = await request();
    this.setState({
      ...this.state,
      isRoot: true,
      nodes,
    });
  }
}

export default App;
