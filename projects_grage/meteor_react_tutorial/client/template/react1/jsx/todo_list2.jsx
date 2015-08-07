TodoApp2 = React.createClass({
  getInitialState: function () {
    return {
      items: [],
      text: ''
    }
  },
  onChange: function (evt) {
    this.setState({text: evt.target.value});
    console.log('typed');
  },
  handleSubmit: function (evt) {
    evt.preventDefault();
    if (this.state.text !== '') {
      var nextItems = this.state.items.concat([this.state.text]);
      this.setState({items: nextItems, text: ''});
      console.log('handleSubmit');
    } else {
      alert('배고파');
    }
  },
  render: function () {
    return (
        <div>
          <div>TodoMongo</div>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield textfield-demo">
              <input className="mdl-textfield__input" type="text" id="sample1" onChange={this.onChange}
                     value={this.state.text}/>
              <label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
            </div>
          </form>
          <button onClick={this.handleSubmit}
                  className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
          {'Add #' + (this.state.items.length + 1)}
          <TodoList2 items={this.state.items}/>

        </div>
    )
  }

});

TodoList2 = React.createClass({
  render: function () {
    var createItem = function (itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});