Meteor.publish 'resolutions', ->
  Resolutions.find {
    $or: [
      private:
        $ne: true
      {owner: @userId}
    ]
  }, {
    sort:
      createdAt: -1
  }
