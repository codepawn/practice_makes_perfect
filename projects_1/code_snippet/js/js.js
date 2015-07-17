// var Sub, Super, Ultra, o;
//
// Ultra = function() {};
// Ultra.prototype.ultraProp = true;
//
// Super = function() {};
// Super.prototype = new Ultra();
//
// var inhe = new Super();
// inhe.ultraProp = 9;
// Super.prototype = inhe;
//
// Sub = function() {};
// Sub.prototype = new Super();
//
// var s = new Super();
// s.ultraProp = 3;
// Sub.prototype = s;
//
// o = new Sub();
// console.log(o.ultraProp);
// o.ultraProp = 1;
// console.log(o.ultraProp);
