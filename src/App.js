import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  }
  DecreaseItem = () => {
    this.setState({ count: this.state.count - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Increment</button>
        <button onClick={this.DecreaseItem}>Decrement</button><br></br><br></br>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.count }</h2> : '' }
      </div>
    );
  }
}

export default App;