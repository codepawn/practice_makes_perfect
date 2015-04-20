Meteor.startup ->
  if Posts.find().count() is 0
    for i in [1..5]
      Posts.insert
        title: "posts #{i}"
        content: "number #{i}"
  if Books.find().count() is 0
    for i in [1..5]
      Books.insert
        title: "asf #{i}"
        author: "awefewa"
        copies: "#{i}"
        lastCheckedOut: new Date
        summary: "aewf#{i}"