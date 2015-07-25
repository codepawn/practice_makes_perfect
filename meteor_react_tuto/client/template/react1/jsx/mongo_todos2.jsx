MongoTodos2 = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      tasks: Tasks.find().fetch()
    }
  },
  process: function () {

  },
  render: function () {
    return (
        <div></div>
    )
  }
});