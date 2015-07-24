FlowRouter.route('/', {
  middlewares: [],
  subscriptions: function (param) {
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
FlowRouter.route('/article', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'article'
    });
  }
});
FlowRouter.route('/react', {
  middlewares: [],
  subscriptions: function (param) {
    this.register('todos', Meteor.subscribe('todos'));
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'react'
    });
  }
});
FlowRouter.route('/react1', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'react1'
    });
  }
});
FlowRouter.route('/react2', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'react2'
    });
  }
});
FlowRouter.route('/react3', {
  middlewares: [],
  subscriptions: function (param) {
  },
  action: function () {
    return FlowLayout.render('masterLayout', {
      nav: 'react3'
    });
  }
});