

var question1 = prompt('Is Jesse from Seattle?'); 


if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
	alert('Correct! Jesse was born and raised in Seattle.');
} else {
	alert('Sorry, incorrect. Jesse is and always will be a Seattleite.');
}

var question2 = prompt('Can Jesse drive a tractor?');

if (question2.toUpperCase() === 'NO' || question2.toUpperCase() === 'N') {
	alert('You are right! Jesse would most likely crash a tractor.');
} else {
	alert('Wrong! Jesse would be able to CRASH a tractor most likely');
}

var question3 = prompt('Does Jesse Like soccer?');

if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
	alert('Right on! Yes, Jesse loves soccer.');
} else {
	alert('You have never been more wrong in your life. Jesse loves soccer.');
}

console.log('Exactly what the user entered ' + question1);
console.log('What I am testing in my "if" condition ' + question1.toUpperCase());

console.log('Question 2 response was ' + question2);
console.log('What I am testing in my "if" condition ' + question2.toUpperCase());

console.log('Question 3 response was ' + question3);
console.log('What I am testing in my "if" condition ' + question3.toUpperCase());

alert('Your answer to Question 1 was ' + question1);
alert('Your answer to Question 2 was ' + question2);
alert('Your answer to Question 3 was ' + question3);

