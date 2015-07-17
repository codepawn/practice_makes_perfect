Template.Home.events({
  'click #upload': function () {
    filepicker.pick(
      {
        mimetypes: ['image/gif', 'image/jpeg', 'image/png'],
        multiple: true
      },
      function (InkBlob) {
        var image = Images.findOne({userId: Meteor.userId()});
        if (image) {
          Images.update({_id: image._id},
            {
              $set: {
                filepickerId: _.last(InkBlob.url.split("/"))
              }
            });
        } else {
          Images.insert({
            userId: Meteor.userId(),
            filepickerId: _.last(InkBlob.url.split("/")),
            createdAt: new Date() //this isnt guarnteed accurate, but its ok for this simple demo
          });
        }
      },
      function (FPError) {
        if (FPError && FPError.code !== 101)
          alert(FPError.toString());
      }
    );
  },

  'change .myFileInput': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }

});
