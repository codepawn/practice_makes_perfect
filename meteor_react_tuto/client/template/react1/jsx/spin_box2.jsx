SpinBox2 = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    }
  },
  render: function () {
    return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.minusOne}
                  className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">remove</i>
          </button>
          <button onClick={this.reset}
                  className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">mood</i>
          </button>
          <button onClick={this.addOne}
                  className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
        </div>
    )
  },
  addOne: function () {
    var adjustValue = this.state.count += 1;
    this.setState({count: this.adjusting(adjustValue)});
  },
  minusOne: function () {
    var adjustValue = this.state.count -= 1;
    this.setState({count: this.adjusting(adjustValue)});
  },
  reset: function () {
    this.setState({count: 0});
  },
  adjusting: function (value) {
    if (value < -5) {
      value = -5;
    }
    if (value > 5) {
      value = 5;
    }
    return value;
  }

});
