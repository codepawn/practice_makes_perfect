Task = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      tasks: Todos.find().fetch()
    }
  },
  getInitialState: function () {
    return {
      counter: 0,
      text: ''
    }
  },
  addCounter: function () {
    this.setState({counter: this.state.counter += 1})
  },
  renderMongo(){
    return this.data.tasks.map((task)=> {
      return (
        <List key={task._id} task={task}></List>
      )
    })
  },
  getTasks() {
    return [
      {_id: 1, text: "This is task 1"},
      {_id: 2, text: "This is task 2"},
      {_id: 3, text: "This is task 3"},
      {_id: 4, text: "This is task 4"}
    ];
  },
  renderTasks() {
    return this.getTasks().map(function (task, k) {
      return (<div key={k}>{task.text}</div>);
    })
  },
  addMore(evt){
    evt.preventDefault();
    Todos.insert({
      text: 'gooText',
      title: 'gooTitle',
      createdAt: new Date()
    });
  },
  removeAll(evt){
    evt.preventDefault();
    Meteor.call('remove');
    console.log('work remove');
  },
  render() {
    return (
      <div>
        <button className="" onClick={this.addMore}>Press to add</button>
        <button className="" onClick={this.removeAll}>Press to remove</button>
          <span className="mdl-badge" data-badge={this.state.counter}>
            <button onClick={this.addCounter}
                    className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i className="material-icons">gamepad</i>
            </button>
          </span>

        <form className="new-task" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks"/>
        </form>
        {this.renderTasks()}
        {this.renderMongo()}
      </div>
    )
  },
  handleSubmit(evt){
    evt.preventDefault();
    console.log('work');
  }
});

List = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },
  render: function () {
    const taskClassName = this.props.task.checked ? "checked" : "";
    return (
      <div key={this.props.key}>
          <span className={taskClassName} onClick={this.removeOne}>
          <div>{this.props.task._id}</div>
          <span>{this.props.task.title} - {this.props.task.text} </span>
          </span>
        <input type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked}/>
      </div>
    )
  },
  toggleChecked(){
    Todos.update(this.props.task._id, {
      $set: {checked: !this.props.task.checked}
    })
  },
  removeOne(evt){
    evt.preventDefault();
    console.log('work');
    Todos.remove(this.props.task._id);
  }
});