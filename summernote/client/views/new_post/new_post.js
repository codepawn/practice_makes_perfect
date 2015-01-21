/*****************************************************************************/
/* NewPost: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NewPost.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.NewPost.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* NewPost: Lifecycle Hooks */
/*****************************************************************************/
Template.NewPost.created = function () {
};

Template.NewPost.rendered = function () {

  $('.summernote').summernote({
    height: 300,
    width: 621,
    lang: 'ko-KR'
  });

};

Template.NewPost.destroyed = function () {
};