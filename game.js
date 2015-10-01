

var question1 = document.getElementById("first");
var question2 = document.getElementById("second");
var question3 = document.getElementById("third");
var correctAnswers = 0;

var userName = prompt("What is your name?");

function firstquestion()	{
	var question1 = prompt('Is Jesse from Seattle?');
		alert('Your answer to Question 1 was ' + question1 + '.');
	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
		first.innerHTML='Correct! Jesse was born and raised in Seattle.';
		correctAnswers++;
	} else {
		first.innerHTML='Sorry, incorrect. Jesse is and always will be a Seattleite.';
	}
}

function secondquestion()	{
	var question2 = prompt('Can Jesse drive a tractor?');
		alert('Your answer to Question 2 was ' + question2 + '.');
	if (question2.toUpperCase() === 'NO' || question2.toUpperCase() === 'N') {
		second.innerHTML='You are right! Jesse would most likely crash a tractor.';
		correctAnswers++;
	} else {
		second.innerHTML='Wrong! Jesse would be able to CRASH a tractor most likely';
	}
}

function thirdquestion()	{
	var question3 = prompt('Does Jesse Like soccer?');
		alert('Your answer to Question 3 was ' + question3 + '.');
	if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
		third.innerHTML='Right on! Yes, Jesse loves soccer.';
		correctAnswers++;
	} else {
		third.innerHTML='You have never been more wrong in your life. Jesse loves soccer.';
	}
}

function summary()	{
	if (correctAnswers === 3) {
		ending.innerHTML='Congrats, you received a ' + correctAnswers + ' out of 3! You really know a lot about Jesse. Thanks for playing, ' + userName + '!';
	} else {
		ending.innerHTML='Sorry, you need to know Jesse a lot better. You received a ' + correctAnswers + ' out of 3. Thanks for playing anyway, ' + userName + '!';
	}
}

firstquestion();
secondquestion();
thirdquestion();
summary();

console.log('This is the user\'s name ' + userName);
console.log('Question 1 response was ' + question1);
console.log('What I am testing in my "if" condition ' + question1.toUpperCase());
console.log('Question 2 response was ' + question2);
console.log('What I am testing in my "if" condition ' + question2.toUpperCase());
console.log('Question 3 response was ' + question3);
console.log('What I am testing in my "if" condition ' + question3.toUpperCase());




