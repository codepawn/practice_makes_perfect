Timer2 = React.createClass({
  getInitialState: function () {
    return {
      foo: 'foo',
      secondsElapsed: 0
    }
  },
  tick: function () {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1);
  },
  componentWillUnmount: function () {
    clearInterval(this.interval);
  },
  render: function () {
    return (
        <div>
          <div>Hello React</div>
          <div>{this.state.foo}</div>
          <h1>시간 {this.state.secondsElapsed}</h1>
          <button onClick={this.reset}
                  className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">mood</i>
          </button>
        </div>
    )
  },
  reset: function () {
    this.setState({secondsElapsed: 0});
  }
});