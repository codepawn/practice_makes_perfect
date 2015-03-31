@Todos = new Meteor.Collection 'todos'

Todos.attachSchema new SimpleSchema
  todos:
    type: String
    label: 'Todos'
    max: 200

  is_done:
    type: Boolean
#    autoValue: ->
#      if @isInsert
#        false
#    autoform:
#      omit: true

  createdAt:
    type: Date
    denyUpdate: true
    autoValue: ->
      new Date
    autoform:
      omit: true
