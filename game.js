
var userName = prompt("What is your name?");
var question1 = prompt('Is Jesse from Seattle?');
	alert('Your answer to Question 1 was ' + question1 + '.');
var question2 = prompt('Can Jesse drive a tractor?');
	alert('Your answer to Question 2 was ' + question2 + '.');
var question3 = prompt('Does Jesse Like soccer?');
	alert('Your answer to Question 3 was ' + question3 + '.');
var correctAnswers = 0;

function firstquestion()	{
	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
		alert('Correct! Jesse was born and raised in Seattle.');
		correctAnswers++;
	} else {
		alert('Sorry, incorrect. Jesse is and always will be a Seattleite.');
	}
}

function secondquestion()	{
	if (question2.toUpperCase() === 'NO' || question2.toUpperCase() === 'N') {
		alert('You are right! Jesse would most likely crash a tractor.');
		correctAnswers++;
	} else {
		alert('Wrong! Jesse would be able to CRASH a tractor most likely');
	}
}

function thirdquestion()	{
	if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
		alert('Right on! Yes, Jesse loves soccer.');
		correctAnswers++;
	} else {
		alert('You have never been more wrong in your life. Jesse loves soccer.');
	}
}

firstquestion();
secondquestion();
thirdquestion();

console.log('This is the user\'s name ' + userName);
console.log('Question 1 response was ' + question1);
console.log('What I am testing in my "if" condition ' + question1.toUpperCase());
console.log('Question 2 response was ' + question2);
console.log('What I am testing in my "if" condition ' + question2.toUpperCase());
console.log('Question 3 response was ' + question3);
console.log('What I am testing in my "if" condition ' + question3.toUpperCase());


if (correctAnswers === 3) {
	alert('Congrats, you received a ' + correctAnswers + ' out of 3! You really know a lot about Jesse. Thanks for playing, ' + userName + '!');
} else {
	alert('Sorry, you need to know Jesse a lot better. You received a ' + correctAnswers + ' out of 3. Thanks for playing anyway, ' + userName + '!');
}

