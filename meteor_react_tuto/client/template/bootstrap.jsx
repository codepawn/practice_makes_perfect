Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  React.render(<App />, document.getElementById("render-target"));

  React.render(<HelloMessage name="John Kim"/>, document.getElementById("name"));
  React.render(<HelloMessage name="J Kim"/>, document.getElementById("name1"));

});
