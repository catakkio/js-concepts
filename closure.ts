function alertFun(msg) {
  return () => {
    alert(`alert${msg}`);
  };
}

const alertMom = alertFun("hi mom");
alertMom(); // hi mom

////////////
for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}

// var is stored as global variables, it increase is value and after 100ms is logged 3,3,3
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}

/////////////////////

function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}

var test = outer()();

//////// Exercises from web: https://codepen.io/beingdev/pen/OvvGzp

function func11() {
  var a = 5;
  console.log(a, b); ////////////
  var b = 6;
}
func11();

/**************************************************************************/
//console.log(var1);      ////////////
var var1 = 1;
function func() {
  //console.log(var1);    ////////////
  var var1 = 2;
  //console.log(var1);    ////////////
}
var var1 = 3;
//console.log(var1);      ////////////
func();

/**************************************************************************/
//block scoping is there in ES6
function func() {
  //console.log(var1);   ////////////
  //console.log(let1);   ////////////
  if (true) {
    var var1 = 2;
    let let1 = 23;
  }
  //console.log(var1);   ////////////
  //console.log(let1);   ////////////
}
var var1 = 3;
func();

/**************************************************************************/
func1(); ////////////
func2(); ////////////
function func1() {
  console.log("func1");
}
var func2 = function () {
  console.log("func2");
};

/**************************************************************************/
var var1 = 2;
console.log(i); ////////////
for (var i = 0; i < 11; i++) {
  console.log("asdf");
}
console.log(i); ////////////

//care about hoisting while programming

//why you should be caring about hoisting while programming
//difference between variable declaration and definition // where hoisting comes into picture
