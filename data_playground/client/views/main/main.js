Template.Main.rendered = function () {

  //$('#container').imagesLoaded(function () {
  //  $('#container').isotope({
  //    itemSelector: '.item',
  //    transformsEnabled: false
  //  });
  //});


  var handler = $('#tiles li');

  handler.wookmark({
    // Prepare layout options.
    autoResize: true, // This will auto-update the layout when the browser window is resized.
    container: $('#main'), // Optional, used for some extra CSS styling
    offset: 5, // Optional, the distance between grid items
    outerOffset: 10, // Optional, the distance to the containers border
    itemWidth: 210 // Optional, the width of a grid item
  });

  // Capture clicks on grid items.
  handler.click(function () {
    // Randomize the height of the clicked item.
    var newHeight = $('img', this).height() + Math.round(Math.random() * 300 + 30);
    $(this).css('height', newHeight + 'px');

    // Update the layout.
    handler.wookmark();


  });
};
