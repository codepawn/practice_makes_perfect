TodoApp = React.createClass({
  getInitialState: function () {
    return {
      items: [],
      text: ''
    };
  },
  onChange: function (e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function () {
    return (
        <div>
          <h3>TODO</h3>

          <h1>Google</h1>
          <TodoList items={this.state.items}/>

          <form onSubmit={this.handleSubmit}>
            <p>{this.state.text}</p>
            <input onChange={this.onChange} value={this.state.text}/>
            <button className='btn btn-default'>{'Add #' + (this.state.items.length + 1)}</button>
          </form>
        </div>
    );
  }
});

TodoList = React.createClass({
  render: function () {
    var createItem = function (itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
