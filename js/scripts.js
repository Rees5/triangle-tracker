var input=function(a,b, c) {
return a, b, c
}
var a=parseInt(prompt("Input a:"));
var b=parseInt(prompt("Input b:"));
var c=parseInt(prompt("Input c"));
if(a+b<=c||a+c<=b||b+c<=a) {
alert("NOT a triangle at all")
}
else if(a===b&&a===c&&b===c) {
alert("Equilateral Triangle");
} else if(a===b&&a!==c||a===c&&a!==b||b===c&&b!==a) {
alert("Isosceles Triangle");
} else if(a!==b&&b!==c&&a!==c&&a+b>c&&a+c>b&&b+c>a) {
alert("Scalene Triangle")
} else {
alert("NOT a Triangle at all")
}
