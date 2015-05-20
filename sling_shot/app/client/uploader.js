var uploader = new Slingshot.Upload("myFileUploads");

Template.Home.events({
  'click [name=a]': function(){

    uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
      if (error) {
        // Log service detailed response
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
      }
      else {
        Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
      }
    });

  }

});

