FlowRouter.route('/', {
  middlewares: [],
  subscriptions: function (param) {
    this.register('todos', Meteor.subscribe('todos'));
  },
  action: function () {
    FlowLayout.render('masterLayout', {
      nav: 'home'
    });
  },
  name: 'home'
});
FlowRouter.route('/mdl', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'mdl'
    });
  }
});
FlowRouter.route('/react', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'react'
    });
  }
});