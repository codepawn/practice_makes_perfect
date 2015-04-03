Meteor.startup ->
  if Articles.find().count() is 0
    i = 0
    while i < 3
      Articles.insert
        title:"Blog Article #{i}"
        body:'This is the text body for the article I want to show'
        CreateAt: new Date()
        author: 'Chris Mather'
      i++
