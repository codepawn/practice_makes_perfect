#
# File Methods
#

Meteor.methods {
  uploadFile: (file) ->
    file.save "/Users/cmather/tmp/uploads"
}

#
#   Example:
#    '/app/file/update/email': function (email) {
#      Users.update({_id: this.userId}, {$set: {'profile.email': email}});
#    }
#
#

