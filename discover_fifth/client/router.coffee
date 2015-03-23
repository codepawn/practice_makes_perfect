Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"

Router.map ->
  @route "Main",
    path: "/"
    name: "main"
