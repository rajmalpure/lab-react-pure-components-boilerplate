import React, { PureComponent } from 'react';

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  handleClick = () => {
    const { toggle, count } = this.state;
    if (toggle) {
      this.setState({ count: count + 1 });
    }
  };

  render() {
    const { count, toggle } = this.state;

    return (
      <div>
        <h2>Pure Component</h2>
        <h3>{count}</h3>
        <button onClick={() => this.setState({ toggle: !toggle })}>
          Set Toggle
        </button>

        <button onClick={this.handleClick}>Counter</button>
      </div>
    );
  }
}
