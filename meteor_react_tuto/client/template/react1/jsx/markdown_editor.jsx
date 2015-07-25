MarkdownEditor2 = React.createClass({
  getInitialState: function () {
    return {
      value: "",
      defaultText: "Type what ever you want."
    }
  },
  render: function () {
    return (
        <div>
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield textfield-demo">
              <textarea className="mdl-textfield__input" type="text" rows="2" id="sample5"
                        onChange={this.changeText}></textarea>
              <label className="mdl-textfield__label" htmlFor="sample5">{this.state.defaultText}</label>
            </div>
          </form>
          <h1>{this.state.value}</h1>
        </div>
    )
  },
  changeText: function (evt) {
    this.setState({value: evt.target.value})
    console.log('work');
  }
});