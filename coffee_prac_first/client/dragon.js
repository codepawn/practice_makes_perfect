//while (slaying) {
//  var breathText = 'Starting the dragon breathe fire in order to kill you.';
//  $('body').append('<div>' + breathText + '</div>');
//  console.log(breathText);
//  youHitCal();
//
//  if (youHit) {
//    var dodged = 'You were dodged the dragon breath, Now your turn';
//    $('body').append('<div>' + dodged + '</div>');
//
//    console.log(dodged);
//    totalDamage += damageThisRound;
//    totalDamage += damageThisRound;
//
//    //make a dragon hit point stat
//
//    if (totalDamage >= 8) {
//      var damage = 'You make ' + totalDamage + ' damage to the dragon, You slew the dragon';
//      console.log(damage);
//      $('body').append('<div>' + damage + '</div>');
//      slaying = false;
//    } else {
//      var damageN = 'You make ' + totalDamage + ' damage to the dragon, the number is not enough damege for the dragon. breath fire is coming again';
//      $('body').append('<div>' + damageN + '</div>');
//      console.log(damageN);
//    }
//  } else {
//    var hit = 'You got a hit!, you are a deadman';
//    $('body').append(hit);
//    console.log(hit);
//    slaying = false;
//  }
//}

//
//
//$(document).ready(function() {
//
//  var slaying = true;
//  var youHit;
//  var youHitCal = function() {
//    youHit = Math.floor(Math.random() * 2 + 0.25);
//  };
//  var damageThisRound = (Math.floor(Math.random() * 5 + 1));
//
//  var totalDamage = 0;
//
//  var line = '############################################################</br>';
//  var story = 'Once upon a time blah blah... So, you should attack a dragon for survivaling first.</br> NOW START!</br>';
//
//  $('body').append(line + line + story + line + line + '</p>');
//  console.log(story);
//
//  while (slaying) {
//    var breathText = 'Starting the dragon breathe fire in order to kill you.';
//    $('body').append('<div>' + breathText + '</div>');
//    console.log(breathText);
//    youHitCal();
//
//    if (youHit) {
//      var dodged = 'You were dodged the dragon breath, Now your turn';
//      $('body').append('<div>' + dodged + '</div>');
//
//      console.log(dodged);
//      totalDamage += damageThisRound;
//      totalDamage += damageThisRound;
//
//      //make a dragon hit point stat
//
//      if (totalDamage >= 8) {
//        var damage = 'You make ' + totalDamage + ' damage to the dragon, You slew the dragon';
//        console.log(damage);
//        $('body').append('<div>' + damage + '</div>');
//        slaying = false;
//      } else {
//        var damageN = 'You make ' + totalDamage + ' damage to the dragon, the number is not enough damege for the dragon. breath fire is coming again';
//        $('body').append('<div>' + damageN + '</div>');
//        console.log(damageN);
//      }
//    } else {
//      var hit = 'You got a hit!, you are a deadman';
//      $('body').append(hit);
//      console.log(hit);
//      slaying = false;
//    }
//  }
//});
