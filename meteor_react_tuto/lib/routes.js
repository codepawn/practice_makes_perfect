FlowRouter.route('/', {
  middlewares: [],
  subscriptions: function(param) {},
  action: function() {
    FlowLayout.render('hello');
  },
  name: 'home'
});
