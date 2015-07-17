#***************************************************************************
# Server Only Methods
#*****************************************************************************

Meteor.methods
  remove: (id)->
    res = Resolutions.findOne(id)

    if res.owner isnt Meteor.userId()
      throw new Meteor.Error('not-authorized')

    Resolutions.remove id

  updateCheck: (id, checked)->
    res = Resolutions.findOne(id)

    if res.owner isnt Meteor.userId()
      throw new Meteor.Error('not-authorized')

    Resolutions.update id, {
      $set:
        checked: checked
    }

  private: (id, privated)->
    res = Resolutions.findOne(id)

    if res.owner isnt Meteor.userId()
      throw new Meteor.Error('not-authorized')

    Resolutions.update id, {
      $set:
        private: privated
    }