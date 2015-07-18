HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

App = React.createClass({
  getTasks() {
    return [
      {_id: 1, text: "This is task 1"},
      {_id: 2, text: "This is task 2"},
      {_id: 3, text: "This is task 3"},
      {_id: 4, text: "This is task 4"}
    ];
  },

  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task}/>;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});


// Task component - represents a single todo item
Task = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
});
