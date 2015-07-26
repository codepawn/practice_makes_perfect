Task = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      tasks: Todos.find().fetch()
    }
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
          {this.renderTasks()}
          {this.renderMongo()}
        </div>
    )
  }
});

List = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
        <div key={this.props.key} onClick={this.removeOne}>
          <div>{this.props.task._id}</div>
          <span>{this.props.task.title} - {this.props.task.text}</span>
          <input type="checkbox" readOnly={true} checked={this.props.task.checked} onClick={this.toggleChecked}/>
        </div>
    )
  },
  removeOne(evt){
    evt.preventDefault();
    console.log('work');
    Todos.remove(this.props.task._id);
  }
});