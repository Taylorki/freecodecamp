const logs = {
  0: "> Console cleared!",
  1: "> Initiating...",
  2: "> Gathering data from subject with id #SEBA-25693...",
  3: "> Checking subject's Facebook activity log...",
  4: "> Done",
  5: '> subjectAlive ? "I am 27 years old" : "I was 27 years old"',
  6: '> subjectHappy ? "I am 27 years young" : "I am 27 years old"',
  7: "> Image flipped!",
  8: "> Fetching personal data from Cambridge Analytica...",
  9: "> Checking grades in university database...",
  10: "> Good decisions come from experience, and experience comes from bad decisions",
  11: "> Eat, sleep, eat, repeat",
  12: "> También un poco de español",
  13: "> Image flipped again!",
};

let logIdsInUse = [];
function createLogTemplate(id) {
  let innerText = logs[id];
  return `<p class="typing"> ${innerText}</p>`;
}

function showLog(id) {
  if (!logIdsInUse.includes(id)) {
    let html = htmlToElement(createLogTemplate(id));
    document.getElementById("log-files").appendChild(html);
    logIdsInUse.push(id);
    logClearing(logIdsInUse.length);
  } else if (id === 7) {
    let html = htmlToElement(createLogTemplate(13));
    document.getElementById("log-files").appendChild(html);
    logIdsInUse.push(id);
    logClearing(logIdsInUse.length);
  }
}

function logClearing(numberOfLogs) {
  if (numberOfLogs === 25) {
    document.getElementById("log-files").innerHTML = "";
    logIdsInUse = [];
    showLog(0);
  }
}

function clearLog() {
  document.getElementById("log-files").innerHTML = "";
  logIdsInUse = [];
  showLog(0);
}

function openLog() {
  document.getElementById("console").style.width = "25vw";
  document.getElementById("console").style.visibility = "visible";
  showLog(1);
  setTimeout(function () {
    showLog(2);
  }, 2000);
  setTimeout(function () {
    showLog(3);
  }, 4500);
  setTimeout(function () {
    showLog(4);
  }, 6500);
}

let commands = `
<p> --- <br/>
 clear(): clears the console <br/>
 play(): play a game <br/>
 --- </p>
`;

let choices = ["ROCK", "PAPER", "SCISSORS"];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let currentChoice;
let result; 

function getRockPaperScissors(randomNumber) {
  let choice = choices[randomNumber];
  currentChoice = choice;

  return `
<p> --- <br/>
 ${choice} <br/>
 --- </p>
`;
}

function paragraphTemplate(txt) {
  return `
<p> --- <br/>
 ${txt} <br/>
 --- </p>
`;
}

let winningSchedule = {
  paper : 'ROCK', 
  rock : 'SCISSORS', 
  scissors : 'PAPER'
}

let logInput = document.getElementById("logInput");
logInput.addEventListener("keyup", function (event) {
  let currentValue = document.getElementById("logInput").value; 
  currentValue.toLowerCase(); 
  if (event.keyCode === 13) {
    event.preventDefault();
    if (currentValue === "clear()") {
      clearLog();
      clearLogInput();
    } else if (currentValue === "-h") {
      let html = htmlToElement(commands);
      document.getElementById("log-files").appendChild(html);
    } else if (currentValue === "play()") {
      let choice = getRandomArbitrary(0, 3);
      let html = htmlToElement(getRockPaperScissors(choice));
      document.getElementById("log-files").appendChild(html);
      document.getElementById("logInput").value = "";
      document.getElementById("logInput").placeholder = "Make your move";
    } else if (currentValue == "paper") {
      result = winningSchedule.paper === currentChoice ? 'You won!' : 'You lose!'; 
      let html = htmlToElement(paragraphTemplate(result));
      document.getElementById("log-files").appendChild(html);
      finishGame(); 
    } else if (currentValue == "rock") {
      result = winningSchedule.rock === currentChoice ? 'You won!' : 'You lose!'; 
      let html = htmlToElement(paragraphTemplate(result));
      document.getElementById("log-files").appendChild(html);
      finishGame(); 
    } else if (currentValue == "scissors") {
      result = winningSchedule.scissors === currentChoice ? 'You won!' : 'You lose!'; 
      let html = htmlToElement(paragraphTemplate(result));
      document.getElementById("log-files").appendChild(html);
      finishGame(); 
    }
  }
});

function finishGame() {
  document.getElementById("logInput").value = "";
  document.getElementById("logInput").placeholder = result === 'You won!' ? 'Well done' : 'Try again'; 
  currentChoice = ''; 
}

function clearLogInput() {
  document.getElementById("logInput").value = "";
}

let firstAnswer = `<div class='currentAnswer'>
<p>My name is Sebastiaan (Seb), <span onmouseover="showLog(5)">I am </span> 27 years <span onmouseover="showLog(6)">old</span> and I'm originally from Antwerp, Belgium.<br/>
I'm a software developer at heart and I have a wide range of skills and 
expertise within this field. <br> 
Apart from programming, I love traveling, writing fiction and playing the piano. 
</p>
</div>`;

let secondAnswer = `
 <div class='currentAnswer'>
 <p> During my bachelor's and master's degree, I focused mostly on marketing and finance. <br/>
 I also improved my skills in a variety of domains: statistics, maths, economics, languages, ... <br/>
   My
   master thesis researched the impact of
   new digital marketing formats on children <br/>
   and how forewarnings can help them in
   their defense against advertisements.  </p>
</div>
 `;

let thirdAnswer = `
 <div class='currentAnswer'>
 
 <p> I started as a marketing specialist for a medium-sized catering company. I was part of the rebranding process, <br/>
 creating a newer and more recognizable brand, which simultaneously stood for the values the company wanted to represent. </p>
 <p> After that, I started working for a Salesforce implementation partner, first as a consultant, and then as a developer. <br/>
 And I have been doing exactly that for the past 3-ish years, building a vast array of experience in Salesforce along the way. <br/>
 I have touched nearly all aspects of Salesforce development on the core platform (Apex, Visualforce, LWC, SOQL, declarative tools),<br/>
  as well as on its Marketing Cloud, which includes languages such as html/css, handlebars, AMPscript and SQL. 
 </p>
 </div>
 `;

let fourthAnswer = `
 <div class='currentAnswer'>
 <p> I am responsible for multiple clients mostly situated in the cultural sector. These clients usually have similar requirements <br/>
 for their Salesforce org:
 <ul>
 <li>
 complex logic including building custom interfaces, trigger logic and asynchronous work 
 </li>
 <li>
 integrations with their ticketing system, website and/or planning application 
 </li>
 <li>
 sending out highly personalized, relevant mails
 </li>
 <li>
 a blog building interface 
 </li>
 </ul>
 And so on... <br/>
 On a day-to-day basis, I am either building or maintaining these requirements.
 </p>
 </div>
 `;

let fifthAnswer = `
 <div class='currentAnswer'>
 <ul>
 <li> Dutch: native </li>
 <li> English: fluent / near-native </li>
 <li> French: intermediate </li>
 <li> German: beginner </li>
 </ul>
 </div>
 `;

let sixthAnswer = `
 <div class='currentAnswer'>
 <p> Back in 2018, I went to Vietnam for 3 months to aid university students with their English study <br/>
 through a series of discussion classes. It was a wonderful experience, enabling me to empower others and <br/> 
 at the same time, have a deeper self-understanding.
 </p>
 </div>
 `;

let seventhAnswer = `
 <div class='currentAnswer flip-image'>
  <div class="flip-box">
    <div class="flip-box-inner">
      
      <div class="flip-box-front">
        <img class="profilePicture" onmouseover="showLog(7)" width="150" src="profilePicture.png" />
      </div>
      
      <div class="flip-box-back">
        <p>It's me!</p>
      </div>
    </div>
  </div>
 </div>
 `;

const answers = {
  0: firstAnswer,
  1: secondAnswer,
  2: thirdAnswer,
  3: fourthAnswer,
  4: fifthAnswer,
  5: sixthAnswer,
  6: seventhAnswer,
};

let currentlyOpen = [];

function showAnswer(currentElement, id) {
  if (!currentlyOpen.includes(id)) {
    currentElement.getElementsByClassName("left-arrow")[0].style.display =
      "none";
    currentElement.getElementsByClassName("down-arrow")[0].style.visibility =
      "visible";
    let html = htmlToElement(answers[id]);
    currentElement.appendChild(html);
    currentlyOpen.push(id);
  } else if (currentlyOpen.includes(id)) {
    currentElement.getElementsByClassName("currentAnswer")[0].remove();
    const index = currentlyOpen.indexOf(id);
    currentlyOpen.splice(index, 1);
    currentElement.getElementsByClassName("left-arrow")[0].style.display =
      "inline";
    currentElement.getElementsByClassName("down-arrow")[0].style.visibility =
      "hidden";
  } else {
    currentElement.getElementsByClassName("left-arrow")[0].style.display =
      "none";
    currentElement.getElementsByClassName("down-arrow")[0].style.visibility =
      "visible";
    let html = htmlToElement(answers[id]);
    currentElement.appendChild(html);
    currentlyOpen.push(id);
  }
}

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

openLog();
document.getElementById("logInput").focus();

function changeSidebar() {
  document.getElementById("console").remove();
}

var faq1Container = document.getElementById("faq-1-container");
faq1Container.onclick = faqOnclickHandler;
var faq2Container = document.getElementById("faq-2-container");
faq2Container.onclick = faqOnclickHandler;
var faq3Container = document.getElementById("faq-3-container");
faq3Container.onclick = faqOnclickHandler;
var faq4Container = document.getElementById("faq-4-container");
faq4Container.onclick = faqOnclickHandler;
var faq5Container = document.getElementById("faq-5-container");
faq5Container.onclick = faqOnclickHandler;
var faq6Container = document.getElementById("faq-6-container");
faq6Container.onclick = faqOnclickHandler;
var faq7Container = document.getElementById("faq-7-container");
faq7Container.onclick = faqOnclickHandler;

function faqOnclickHandler() {
  switch (this.id) {
    case "faq-1-container":
      showAnswer(this, 0);
      break;
    case "faq-2-container":
      showAnswer(this, 1);
      break;
    case "faq-3-container":
      showAnswer(this, 2);
      break;
    case "faq-4-container":
      showAnswer(this, 3);
      break;
    case "faq-5-container":
      showAnswer(this, 4);
      break;
    case "faq-6-container":
      showAnswer(this, 5);
      break;
    case "faq-7-container":
      showAnswer(this, 6);
      break;
  }
}

var faq1 = document.getElementById("faq-1");
faq1.onclick = faqLogHandler;
var faq2 = document.getElementById("faq-2");
faq2.onclick = faqLogHandler;
var faq3 = document.getElementById("faq-3");
faq3.onclick = faqLogHandler;
var faq4 = document.getElementById("faq-4");
faq4.onclick = faqLogHandler;
var faq5 = document.getElementById("faq-5");
faq5.onclick = faqLogHandler;

function faqLogHandler() {
  switch (this.id) {
    case "faq-1":
      showLog(8);
      break;
    case "faq-2":
      showLog(9);
      break;
    case "faq-3":
      showLog(10);
      break;
    case "faq-4":
      showLog(11);
      break;
    case "faq-5":
      showLog(12);
      break;
  }
}
