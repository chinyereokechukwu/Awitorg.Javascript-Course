//define UI vars
const form = document.getElementById('quiz')

//function check

function check(){
  var correct = 0;

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;

//console.log(question1);
//test form
if (question1 == "option1"){
  correct=correct+1;
}

 if (question2 == "option2"){
     correct=correct+1;
 }

 if (question3 == "option2"){
     correct=correct+1;
 }
//console.log(correct);

var messages = ["Good job", "Not bad", "You really need to do better"];
var range;

if(correct == 3)
{ range = 0;
}
if(correct == 2)
{ range = 1;
}
if(correct == 1)
{ range = 2;
}

document.getElementById("message").innerHTML = messages[range];

}
// reflesh page function

function reload() {
    location.reload();
}
