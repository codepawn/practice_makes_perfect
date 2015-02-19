# Client and Server Routes

Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"

#
#   Example:
#   Router.route "/",
#     name: "home"
#
Router.map ->
  @route "/",
    name: "main"

  @route "nametable",
    name: "name.table"
