NameType = React.createClass({
  getInitialState: function () {
    return {
      txt: '바뀝니다',
      id: 1
    }
  },
  changeText: function (evt) {
    this.setState({txt: evt.target.value});
    //console.log('goo');
  },
  render: function () {
    return (
      <div>
        <input type='text' onChange={this.changeText}/>

        <h1>{this.state.txt}</h1>
      </div>
    )
  }
});