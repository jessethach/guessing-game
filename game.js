

var question1 = document.getElementById("first");
var question2 = document.getElementById("second");
var question3 = document.getElementById("third");
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var first_g = document.getElementById("first_g");
var first_r = document.getElementById("first_r");
var second_g = document.getElementById("second_g");
var second_r = document.getElementById("second_r");
var third_g = document.getElementById("third_g");
var third_r = document.getElementById("third_r");
var correctAnswers = 0;
var userName = prompt("What is your name?");
	console.log('This is the user\'s name ' + userName);
var questions = ['Is Jesse from Seattle?', 'Can Jesse drive a tractor?', 'Does Jesse Like soccer?'];
var answers = ['YES', 'Y', 'NO', 'N']

function firstquestion()	{
	var question1 = prompt(questions[0]);
		console.log('Question 1 response was ' + question1);
		console.log('What I am testing in my "if" condition ' + question1.toUpperCase());
	if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
		first_g.innerHTML = 'Correct! Jesse was born and raised in Seattle.';
		pic1.innerHTML = '<img src="img/cool-dog.jpg" width="200">';
		correctAnswers++;
	} else {
		first_r.innerHTML = 'Sorry, incorrect. Jesse is and always will be a Seattleite.';
	}
}

function secondquestion()	{
	var question2 = prompt(questions[1]);
		console.log('Question 2 response was ' + question2);
		console.log('What I am testing in my "if" condition ' + question2.toUpperCase());
	if (question2.toUpperCase() === answers[2] || question2.toUpperCase() === answers[3]) {
		second_g.innerHTML = 'You are right! Jesse would most likely crash a tractor.';
		pic2.innerHTML = '<img src="img/cool-dog.jpg" width="200">';		
		correctAnswers++;
	} else {
		second_r.innerHTML = 'Wrong! Jesse would be able to CRASH a tractor most likely';
	}
}

function thirdquestion()	{
	var question3 = prompt(questions[2]);
		console.log('Question 3 response was ' + question3);
		console.log('What I am testing in my "if" condition ' + question3.toUpperCase());
	if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
		third_g.innerHTML = 'Right on! Yes, Jesse loves soccer.';
		pic3.innerHTML = '<img src="img/cool-dog.jpg" width="200">';
		correctAnswers++;
	} else {
		third_r.innerHTML = 'You have never been more wrong in your life. Jesse loves soccer.';
	}
}

function summary()	{
	if (correctAnswers === 3) {
		ending.innerHTML = 'Congrats, you received a ' + correctAnswers + ' out of 3! You really know a lot about Jesse. Thanks for playing, ' + userName + '!';
	} else {
		ending.innerHTML = 'Sorry, you need to know Jesse a lot better. You received a ' + correctAnswers + ' out of 3. Thanks for playing anyway, ' + userName + '!';
	}
}

firstquestion();
window.setTimeout(secondquestion, 1000);
window.setTimeout(thirdquestion, 1000);
window.setTimeout(summary, 1000);

