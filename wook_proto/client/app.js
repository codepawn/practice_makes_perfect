Template.body.rendered = function () {

  var container = $('#main');
  container.imagesLoaded(function () {


    var options = {
      autoResize: true, // This will auto-update the layout when the browser window is resized.
      container: $(container) // Optional, used for some extra CSS styling
    };

    var handler = $('#tiles li');

    handler.wookmark(options);
    console.log('foobar');
  })
    .always(function (instance) {
      console.log('all images loaded');
    })
    .done(function (instance) {
      console.log('all images successfully loaded');
    })
    .fail(function () {
      console.log('all images loaded, at least one is broken');
    })
    .progress(onProgress)


  var $progress, $status;
  var supportsProgress;
  var loadedImageCount, imageCount;

  function onProgress( imgLoad, image ) {
    // change class if the image is loaded or broken
    var $item = $( image.img ).parent();
    $item.removeClass('is-loading');
    if ( !image.isLoaded ) {
      $item.addClass('is-broken');
    }
    // update progress element
    loadedImageCount++;
    updateProgress( loadedImageCount );
  }

};
