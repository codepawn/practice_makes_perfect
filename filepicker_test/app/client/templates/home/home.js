Template.Home.events({
  'click #upload': function () {
    filepicker.pick(
      {
        mimetypes: ['image/gif','image/jpeg','image/png'],
        multiple: false
      },
      function(InkBlob){
        var image = Images.findOne({userId:Meteor.userId()});
        if(image){
          Images.update({_id:image._id},
            {
              $set:{
                filepickerId:_.last(InkBlob.url.split("/"))
              }
            });
        }else{
          Images.insert({
            userId:Meteor.userId(),
            filepickerId:_.last(InkBlob.url.split("/")),
            createdAt:new Date() //this isnt guarnteed accurate, but its ok for this simple demo
          });
        }
      },
      function(FPError){
        if(FPError && FPError.code !== 101)
          alert(FPError.toString());
      }
    );
  }
});



filepicker.setKey('MY_API_KEY');

//Setup Aviary
var featherEditor = new Aviary.Feather({
  //Get an api key for Aviary at http://www.aviary.com/web-key
  apiKey: 'AVIARY_API_KEY',
  apiVersion: 2,
  onSave: function(imageID, newURL) {
    //Export the photo to the cloud using the Filepicker!
    filepicker.export(newURL, {extension:'.png'});
  },
  appendTo: 'web_demo_pane'
});

//Giving a placeholder image while Aviary loads
var preview = document.getElementById('web_demo_preview');

//When the user clicks the button, import a file using the Filepicker
var editPane = document.getElementById('start_web_demo');
editPane.onclick = function(){
  filepicker.pick({mimetype: 'image/*'}, function(InkBlob) {
    //Showing the preview
    preview.src = InkBlob.url;

    //Launching the Aviary Editor
    featherEditor.launch({
      image: preview,
      url: InkBlob.url
    });
  });
};