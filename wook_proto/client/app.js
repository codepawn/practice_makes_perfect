Template.body.rendered = function () {

  var container = $('#main');
  container.imagesLoaded(function () {
    handler.wookmark({
      // Prepare layout options.
      autoResize: true, // This will auto-update the layout when the browser window is resized.
      container: $('#main'), // Optional, used for some extra CSS styling
      //offset: 5, // Optional, the distance between grid items
      //outerOffset: 10, // Optional, the distance to the containers border
      //itemWidth: 210 // Optional, the width of a grid item
    });

  });

  var handler = $('#tiles li');

  handler.wookmark({
    // Prepare layout options.
    autoResize: true, // This will auto-update the layout when the browser window is resized.
    container: $('#main'), // Optional, used for some extra CSS styling
    //offset: 5, // Optional, the distance between grid items
    //outerOffset: 10, // Optional, the distance to the containers border
    //itemWidth: 210 // Optional, the width of a grid item
  });

};
