FlowRouter.route('/', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    FlowLayout.render('home');
  },
  name: 'home'
});