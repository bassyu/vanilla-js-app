import Breadcrumb from './components/Breadcrumb.js';
import Nodes from './components/Nodes.js';
import { request } from './lib/api.js';

class App {
  constructor({ parent }) {
    this.state = {
      isRoot: true,
      path: [],
      nodes: [],
    };

    this.breadcrumb = new Breadcrumb({ parent });
    this.nodes = new Nodes({ parent });

    this.callAPI('');
  }

  setState(newState) {
    this.state = newState;
    const { isRoot, path, nodes } = newState;
    this.breadcrumb.setState({ path });
    this.nodes.setState({ isRoot, nodes });
  }

  async callAPI(id) {
    const nodes = await request(id);
    this.setState({
      ...this.state,
      isRoot: true,
      nodes,
    });
  }
}

export default App;
