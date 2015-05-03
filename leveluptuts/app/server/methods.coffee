#***************************************************************************
# Server Only Methods
#*****************************************************************************

Meteor.methods
  remove: (id)->
    Resolutions.remove id

  updateCheck: (id, checked)->
    Resolutions.update id, {
      $set:
        checked: checked
    }