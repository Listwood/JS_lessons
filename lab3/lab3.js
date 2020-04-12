var hour = prompt("Input current time: ");
if (hour >= 17 && hour < 24){
    alert("Good evening")
}
else if (hour >= 0 && hour < 17) {
    alert("Good morning")
}
else 
alert("Wrong input")

var name = prompt("Input your name: ");
var realName = "John"
if (name == realName)
alert("Hi " + realName)
else
alert("I don't know u")

var login = prompt("Input your login: ");
var pass = prompt("Input your password: ");
if ((login == "ivan" && pass == 333) || (login == "ssss" && pass == 666) || (login == "gibs" && pass == 0000))
alert("Welcome!")
else
alert("User is not found!")

var a = prompt("Input 1 n: ");
var b = prompt("Input 2 n: ");
var c = prompt("Input 3 n: ");

alert(Math.max(a, b, c));