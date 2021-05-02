const logs = {
  0: "> Console cleared!",
  1: "> Initiating...",
  2: "> Gathering data from subject with id #SEBA-25-6-6-93...",
  3: "> Checking subject's Facebook activity log...",
  4: "> Done",
  5: '> subjectAlive ? "I am 27 years old" : "I was 27 years old"',
  6: '> subjectHappy ? "I am 27 years young" : "I am 27 years old"',
  7: "> Image flipped!",
  8: "> Fetching personal data from Cambridge Analytica servers...",
  9: "> Checking grades in university database...",
  10: "> Good decisions come from experience, and experience comes from bad decisions",
  11: "> Eat, sleep, eat, repeat",
  12: "> También un poco de español"
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
    let node = document.createElement("P");
    let textNode = document.createTextNode("> Image flipped again!");
    node.appendChild(textNode);
    document.getElementById("log-files").appendChild(node);
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
  document.getElementById("mySidebar").style.width = "25vw";
  document.getElementById("mySidebar").style.visibility = "visible";
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

let logInput = document.getElementById("logInput");
logInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (document.getElementById("logInput").value === "clear()") {
      clearLog();
      clearLogInput();
    }
  }
});

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
 <p>Yes, I did.<br> During my bachelor's and master's degree, I focused mostly on marketing and finance. <br/>
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