Meteor.startup ->
  if Pics.find().count() is 0
    for i in [1..12]
#      h = Math.random() * 200 + 100
      Pics.insert({src:"sample-images/image_#{i}.jpg",no:i,width:200})