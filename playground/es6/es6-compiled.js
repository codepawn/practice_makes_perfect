"use strict";

if (Meteor.isClient) {

  var count = 10,
      price = 0.25,
      message = count + " items cost $" + (count * price).toFixed(2) + ".";

  console.log(message); // "10 items cost $2.50."
}

if (Meteor.isServer) {
  Meteor.startup(function () {});
}

// code to run on server at startup

//# sourceMappingURL=es6-compiled.js.map