function tap() {
var a = document.getElementById("data1").value;
var b = document.getElementById("data2").value;
var c = document.getElementById("data3").value;
var a=parseInt(a);
var b=parseInt(b);
var c=parseInt(c);
console.log(a)
console.log(b)
console.log(c)
if(a+b<=c||a+c<=b||b+c<=a) {
  alert("NOT a triangle at all")
} else if(a===b&&a===c&&b===c) {
  alert("Your values  " + a+",   "+b+"  and  "+c + "  form  an  "+"Equilateral Triangle!");
} else if(a===b&&a!==c||a===c&&a!==b||b===c&&b!==a) {
  alert("Your values  " + a+",   "+b+"  and   "+c + "  form  an  "+"Isosceles Triangle!");
} else if(a!==b&&b!==c&&a!==c&&a+b>c&&a+c>b&&b+c>a) {
  alert("Your values  " + a+",  "+b+"  and  "+c + " form  a  "+"Scalene Triangle!")
} else {
  alert("NOT a Triangle at all")
}
}
