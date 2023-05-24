function Graph(nodes, edges) {
  this.nodes = nodes;
  this.edges = edges;
  // cache minimum distance between pairs of nodes
  this.distance = {};
}
elem.parentNode.selectedIndex;
function Rectangle(x, y, width, height) {
	this.x = x;
	this.y = y;
	width = width;
	this.height = height;
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}> // BAD `this` is now undefined in `handleClick`
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
