var g = {
  'sum': function() {
    var score = _.map(Template.currentData(), function(item) {
      return item.point;
    });
    var sum = 0;
    for (var i = 0; i < score.length; i++) {
      sum = sum + score[i];
    }
    return sum / score.length;
  },
  'mine': function() {
    var userId = Meteor.userId();
    console.log(Template.currentData());
    var findScore = _.findWhere(Template.currentData(), {
      userId: userId
    });
    return findScore.point;
  }
};

console.log(' CODEPAWN '.toLowerCase().trim());
