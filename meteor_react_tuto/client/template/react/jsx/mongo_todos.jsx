MongoTodos = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tasks: Tasks.find({}, {
        sort: {
          createdAt: -1
        }
      }).fetch()
    };
  },

  renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
      return <MongoTask key={task._id} task={task}/>;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    if (text !== '') {
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });
    } else {
      alert('Put anything');
    }

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },
  render() {
    return (
        <div className="container">
          <header>
            <h1>Todo List</h1>

            <form className="new-task" onSubmit={this.handleSubmit}>
              <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
            </form>
          </header>

          <ul>
            {this.renderTasks()}
          </ul>
        </div>
    );
  }
});


// MongoTask component - represents a single todo item
MongoTask = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    task: React.PropTypes.object.isRequired
  },
  remove(evt){
    evt.preventDefault();
    Tasks.remove(this.props.task._id);
  },
  render() {
    return (
        <li onClick={this.remove}>{this.props.task.text}</li>
    );
  }
});