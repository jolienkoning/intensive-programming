var people = [ 'Jolien', 'Kevin', 'Stephanie', 'Pascal'];

function sayHello (name) {
	document.getElementById("paragraph").innerHTML += '<p>' + ('Hello, ' + name + '. How are you today?') + '</p>';
}
	
for (var index = 0; index < people.length; ++index) {
	sayHello(people[index]);
}






/*

for (var index = array.length -1; index >=0; --index) {
	alert(array[index]);
}

var	array = ['pen', 'pencil', 'eraser'];




for (var index = 0; index < array.length ; ++index) {
	document.getElementById("content").innerHTML += '<li> '+array[index]+' </li>';
}


var	showPopup = true;

if (showPopup === true) {
	alert("show popup")
}





var	showPopup = true;

if (showPopup === true) {
	alert("show popup")
}
IF USE OF A ! IT MEANS NOT

one = assigns variable
three === check if variable equals the value


var name = 'Jolien'

document.getElementById("name").innerHTML = name;

console.log(document.getElementsByClassName("age")[0]);
document.getElementsByClassName("age").innerHTML = number;

var greeting = 'Hello'

var number = 21

var modulo = number % 2

var array = new Array('pink', 'purple', 'red', 'orange')

var array2 = new Array()
array2['name'] = name;
array2['nationality'] = 'Dutch';
array2['age'] = number;
array2['isHappyToday'] = true;

console.log(greeting);
console.log('colors', array);
console.log(array2);
console.log(modulo);

if (modulo===1) { 
console.log(array2['name']+' ' + array2['age']+ ' is ' + 'uneven')}



/*
var number1 = 50;

number1++;

var number2 = 3;

number2--;

var result = number1 + number2 * number2;

var modulo = number1 % number2;

var text = 'Hello JS';

var textResult = text + ' ' + text;

var boolean = true;

var	array = new Array('pineapple', 'mango', 'papaya', text);

array['fruit'] = 'kiwi';

console.log('n1', number1);
console.log('n2', number2);
console.log('result', array);
*/
