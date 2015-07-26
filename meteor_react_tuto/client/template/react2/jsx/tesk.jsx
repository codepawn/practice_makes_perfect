Task = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      tasks: Tasks.find().fetch()
    }
  },
  renderMongo(){
    return this.data.tasks.map((task, key)=> {
      return <div key={key}>{task._id} - {task.text}</div>
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

    return console.log('goo');
  },
  render() {
    return (
        <div>
          <button className="" onClick={this.addMore}>Press</button>
          {this.renderTasks()}
          {this.renderMongo()}
        </div>
    )
  }
});