Template.Main.rendered = function () {

  $('#container').isotope({
    // options...
    itemSelector: '.item',
    masonry: {
      columnWidth: 200
    }
  });

};


Template.Main.events({
  'keypress input': function (evt, tmpl) {
    Session.set('community_members_filter', $('#filterInput').val());
    Meteor.flush();
  }
});

Template.communityPageTemplate.communityUsers = function () {
  return Meteor.users.find({'emails.address': { $regex: Session.get('community_members_filter'), $options: 'i' } });
};