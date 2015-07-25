var a = 'a';
var b = 'a';
console.log('goo');
console.log('goo');
console.log('goo3');
console.log(a);
console.log(b);

array = [1, 2, 3, 4, 5];
aMap = array.map(function(n) {
  return n * 2;
});
console.log(aMap);


var exArray = [1, 2, 3, 4];
exArray.concat(53,3);
console.log(exArray);

console.log(window.prototype.concat);

this.setState({
  list: this.state.list.concat([newObject])
});
