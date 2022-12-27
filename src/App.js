import Breadcrumb from './components/Breadcrumb.js';
import Modal from './components/Modal.js';
import Nodes from './components/Nodes.js';
import { getNodes } from './lib/api.js';

class App {
  constructor({ parent }) {
    this.state = {
      isRoot: true,
      path: [],
      nodes: [],
      filePath: null,
    };

    this.breadcrumb = new Breadcrumb({ parent });
    this.nodes = new Nodes({ parent, onClickNode: this.onClickNode.bind(this) });
    this.modal = new Modal({ parent });

    this.setNodes('');
  }

  setState(newState) {
    this.state = newState;
    const { isRoot, path, nodes, filePath } = newState;
    this.breadcrumb.setState({ path });
    this.nodes.setState({ isRoot, nodes });
    this.modal.setState({ filePath });
    console.log(this.state);
  }

  async setNodes(id) {
    this.setState({
      ...this.state,
      filePath: 'loading',
    });
    const nodes = await getNodes(id);
    this.setState({
      ...this.state,
      filePath: null,
      isRoot: id === '',
      nodes,
    });
  }

  async onClickNode(e) {
    const id = e.currentTarget.id;
    const clickedNode = this.state.nodes.find((node) => node.id === id);
    if (clickedNode.type === 'DIRECTORY') {
      this.setNodes(clickedNode.id);
    } else if (clickedNode.type === 'FILE') {
      this.setState({
        ...this.state,
        filePath: clickedNode.filePath,
      });
    }
  }
}

export default App;
