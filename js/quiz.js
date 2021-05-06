// Create a 2-dimensional array with 5 questions and 5 answers
var qanda = [
  ['Led Zeppelin guitarist?', 'Jimmy Page'],
  ['First American in orbit?', 'John Glenn'],
  ['NL MVP in 2016?', 'Kris Bryant'],
  ['Most recent F1 champion', 'Lewis Hamilton'],
  ['Country of 2021 Olympics', 'Japan']
]

// This code snippet creates a print function which will allow you to call it later when you want to dispay something to the page
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}


// This code snippet builds out the HTML list. 
function buildList(arr) {
  var listHTML = "<ol>";
    for(var i=0;i<arr.length;i++) {
      listHTML += "<li>" + arr[i] + "</li>";
    }
  listHTML += "</ol>";
  return listHTML;
}

// Create a FOR loop that loops through your 2-dimensional array. Create variables for quesions, answers and reponses respectively. Make sure the
// questions show up in a prompt box. Next, within your FOR loop, add a conditional statement that adds keeps track of how many answers have
// correct and how many answers you have wrong. 
//
// EXTRA CREDIT: Make it so that if the user types in a correct reponse, they can do so without making it case-sensitive to your answer. Knowing how
// to accomplish this is very beneficial. Do your best!

var responses = []; // gather the user responses
var correct = [];   // add questions to this list if correct...
var wrong = [];     // and this one if wrong

for (var j = 0; j < 5; j++) {
  responses[j] = prompt(qanda[j][0], "Enter answer here").toLowerCase(); // remove case sensitivity
  if (responses[j] == qanda[j][1].toLowerCase()) {  // check against the QandA array, removing case sensitivity
    correct.push(qanda[j][0]);
  } else {
    wrong.push(qanda[j][0]);
  }
}

// For the last part, you need to write your code so that it prints out your code exactly as it appears on the screenshot.png file inside the project folder.

// Not a very clean way to do this but it seems to work OK
if (wrong.length > 0) {
  var wrongquestions = "You got these questions wrong:" + buildList(wrong);
} else { var wrongquestions = ""; }

// Put everything into a single print output. 
print(`<h2>You got ${correct.length} answer(s) right.` + 
"<h3>You got these questions correct:" +
buildList(correct) + wrongquestions);
