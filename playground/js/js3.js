console.log(0.2 + 0.1);
Math.sin(3.5);
console.log(Math.sin(3.5));
pi = Math.PI;
console.log(pi);
parseInt('128', 10);
console.log(parseInt('128', 10));
console.log(parseInt('11', 10));

console.log(this.document === document);

// 웹 브라우저에서, window 객체는 전역 객체이다 :
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

var o = {
  prop: 37
};

function independent() {
  return this.prop;
}

console.log(independent());

o.b = {
  g: independent,
  prop: 42
};

o = {
  prop: 41,
  google: function() {
    return this.prop;
  }
};
console.log(o.google());
