Template.Home.events({
  'change .myFileInput': function (event, template) {
    FS.Utility.eachFile(event, function (file) {
      Images.insert(file, function (err, fileObj) {
        if (err) {
          console.log(err);
        } else {
          console.log(work);
          var userId = Meteor.userId();
          var imagesURL = {
            'profile.image': '/' + fileObj._id
          };
          Meteor.users.update(userId, {$set: imagesURL});
        }
      });
    });
  }
});