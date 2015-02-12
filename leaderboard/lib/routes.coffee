Router.configure
  layoutTemplate: "layout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"

Router.route 'hello',
  path: '/'
  name: 'hello'