var Cast = require('bmcmahen-cast');
var myCast = new Cast();

var myTemplate = function (obj) {
  return '<p>' + obj.title + '</p>';
};

Template.Main.rendered = function () {


  myCast.draw({
    wrapper: '#cast',
    template: myTemplate
  });

  this.handle = Meteor.autorun(function () {
    var videos = Pictures.find().fetch();
    myCast
      .data(videos, function (attr) {
        return attr._id;
      })
      .sortBy('title')
      .dynamic({
        boxWidth: 150,
        boxHeight: 150,
        paddingWidth: 10,
        paddingHeight: 10
      });
  });
};
