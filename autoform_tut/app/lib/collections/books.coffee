@Books = new Mongo.Collection('books')
Books.attachSchema new SimpleSchema
  title:
    type: String
    label: 'Title'
    max: 200
  author:
    type: String
    label: 'Author'
  copies:
    type: Number
    label: 'Number of copies'
    min: 0
  lastCheckedOut:
    type: Date
    label: 'Last date this book was checked out'
    optional: true
    autoform:
      type: "bootstrap-datepicker"
  summary:
    type: String
    label: 'Brief summary'
    optional: true
    max: 1000

if Meteor.isServer
  Books.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
