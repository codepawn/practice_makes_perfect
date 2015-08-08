//var Future = Npm.require('fibers/future')
//
//Meteor.publish('articles',function(){
//  var future = new Future;
//
//  setTimeout(Meteor.bindEviroment(function(){
//    future.return(Articles.find());
//  }),1000);
//
//  return future.wait();
//});

//Meteor.publish ('articles', function(){
//  setTimeout(function(){ alert("Hello"); }, 3000);
//});