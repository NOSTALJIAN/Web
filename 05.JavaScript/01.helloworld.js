console.log('Hello World!');

var n = 2;
if (n > 0)
    console.log(n + " is positive.");

function fact(n) {
    if (n<=1) return n;
    return n*fact(n-1);
}
for (var i=1; i<10; i++) {
    console.log(i + "! = " + fact(i));
}

console.log(5 + "! = " + fact(5));  //  5! = 120

var obj = {};
obj[ Symbol("heart") ] = 3;
console.log(obj);

