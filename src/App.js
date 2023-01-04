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
      cache: {},
    };

    this.breadcrumb = new Breadcrumb({ parent, onClickPathName: this.onClickPathName.bind(this) });
    this.nodes = new Nodes({ parent, onClickNode: this.onClickNode.bind(this) });
    this.modal = new Modal({ parent, onClickModal: this.onClickModal.bind(this) });

    this.setNodes('');
  }

  setState(newState) {
    this.state = newState;
    const { isRoot, path, nodes, filePath } = newState;
    this.breadcrumb.setState({ path });
    this.nodes.setState({ isRoot, nodes });
    this.modal.setState({ filePath });
  }

  async setNodes(id) {
    this.setState({
      ...this.state,
      filePath: 'loading',
    });

    const nodes = this.state.cache[id] || (await getNodes(id));
    this.setState({
      ...this.state,
      isRoot: id === '',
      nodes,
      filePath: null,
      cache: {
        ...this.state.cache,
        [id]: nodes,
      },
    });
  }

  async onClickPathName(e) {
    if (e.currentTarget.id === 'root') {
      this.setState({
        ...this.state,
        path: [],
      });
      this.setNodes('');
      return;
    }

    const index = Number(e.currentTarget.id);
    const clickedNode = this.state.path[index];
    this.setState({
      ...this.state,
      path: this.state.path.slice(0, index + 1),
    });
    this.setNodes(clickedNode.id);
  }

  async onClickNode(e) {
    const id = e.currentTarget.id;
    if (id === 'back') {
      const newState = { ...this.state };
      newState.path.pop();
      const prevNodeId =
        newState.path.length === 0 ? '' : newState.path[newState.path.length - 1].id;
      this.setState(newState);
      this.setNodes(prevNodeId);
      return;
    }

    const clickedNode = this.state.nodes.find((node) => node.id === id);
    if (clickedNode.type === 'DIRECTORY') {
      this.setState({
        ...this.state,
        path: [...this.state.path, clickedNode],
      });
      this.setNodes(clickedNode.id);
    } else if (clickedNode.type === 'FILE') {
      this.setState({
        ...this.state,
        filePath: clickedNode.filePath,
      });
    }
  }

  async onClickModal(e) {
    if (e.currentTarget.className.includes('Loading')) return;
    this.setState({
      ...this.state,
      filePath: null,
    });
  }
}

export default App;
