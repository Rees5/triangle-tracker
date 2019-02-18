function tap() {
var input=function(a,b, c) {
return a, b, c
}
var a=parseInt("Input a:");
var b=parseInt("Input b:");
var c=parseInt("Input c");
if(a+b<=c||a+c<=b||b+c<=a) {
  alert("NOT a triangle at all")
} else if(a===b&&a===c&&b===c) {
  alert("Your values  " + a+",   "+b+"  and  "+c + "  form  an    "+"Equilateral Triangle!");
} else if(a===b&&a!==c||a===c&&a!==b||b===c&&b!==a) {
  alert("Your values  " + a+",   "+b+"  and   "+c + "  form  an    "+"Isosceles Triangle!");
} else if(a!==b&&b!==c&&a!==c&&a+b>c&&a+c>b&&b+c>a) {
  alert("Your values  " + a+",  "+b+"  and  "+c + "  form  a    "+"Scalene Triangle!")
} else {
  alert("NOT a Triangle at all")
}
}
