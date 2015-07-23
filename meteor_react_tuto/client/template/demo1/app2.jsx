App2 = React.createClass({
  getInitialState: function () {
    return {
      txt: 'the state txt',
      id: 3
    }
  },
  googleisgood: function (e) {
    this.setState({txt: e.target.value});
    //console.log('goo');
  },
  render: function () {
    return (
      <div>
        <input type='text' onChange={this.googleisgood}/>

        <h1>{this.state.txt}</h1>

        <h1>{this.props.txt}</h1>
      </div>
    )
  }
});