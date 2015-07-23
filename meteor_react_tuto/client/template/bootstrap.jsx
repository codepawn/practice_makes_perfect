Meteor.startup(function () {
  React.render(<Timer />, document.getElementById("timer"));
  React.render(<App />, document.getElementById("render-target"));
});