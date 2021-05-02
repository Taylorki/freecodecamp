const logs = {
  0: "> Console cleared!",
  1: "> Initiating...",
  2: "> Gathering data from subject with id #SEBA-25-6-6-93...",
  3: "> Checking subject's Facebook activity log...",
  4: "> Done",
  5: '> subjectAlive ? "I am" : "I was"',
  6: '> subjectHappy ? "young" : "old"',
  7: "> Image flipped!",
};

let logIdsInUse = [];

function showLog(id) {
  if (!logIdsInUse.includes(id)) {
    let node = document.createElement("P");
    let textNode = document.createTextNode(logs[id]);
    node.appendChild(textNode);
    document.getElementById("log-files").appendChild(node);
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

function showOld() {
  document.getElementById("old").style.visibility = "visible";
}

function openLog() {
  document.getElementById("mySidebar").style.width = "25vw";
  document.getElementById("main").style.marginLeft = "25vw";
  document.getElementById("mySidebar").style.visibility = "visible";
  document.getElementById("open-console").style.visibility = "hidden";
  /*showLog(1);
  setTimeout(function () {
    showLog(2);
  }, 2000);
  setTimeout(function () {
    showLog(3);
  }, 4000);
  setTimeout(function () {
    showLog(4);
  }, 6000);*/
}

function closeNav() {
  document.getElementById("mySidebar").style.visibility = "hidden";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  setTimeout(showOpenButton(), 2000); 
}

function showOpenButton() {
  document.getElementById("open-console").style.visibility = "visible";
}

let logInput = document.getElementById("logInput");
logInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   if(document.getElementById("logInput").value === 'clear()') {
       clearLog(); 
       clearLogInput(); 
   }
  }
});

function clearLogInput() {
  document.getElementById('logInput').value = ''; 
}

openLog();
document.getElementById("logInput").focus(); 

let firstAnswer = `<div class='currentAnswer'>
<p>My name is Sebastiaan (Seb), I'm 27 years old and I'm originally from Antwerp, Belgium.<br/>
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

 const answers = {
  0: firstAnswer,
  1: secondAnswer,
  2: "> Gathering data from subject with id #SEBA-25-6-6-93...",
  3: "> Checking subject's Facebook activity log...",
  4: "> Done",
  5: '> subjectAlive ? "I am" : "I was"',
  6: '> subjectHappy ? "young" : "old"',
  7: "> Image flipped!",
};

let currentlyOpen = []; 

function showAnswer(currentElement, id) {
  if (!currentlyOpen.includes(id)) {
    currentElement.getElementsByClassName('left-arrow')[0].style.display = 'none'; 
    currentElement.getElementsByClassName('down-arrow')[0].style.visibility = 'visible'; 
    let html = htmlToElement(answers[id]); 
    currentElement.appendChild(html);
    currentlyOpen.push(id); 
  } else if(currentlyOpen.includes(id)) {
    currentElement.getElementsByClassName('currentAnswer')[0].remove(); 
    const index = currentlyOpen.indexOf(id);
    currentlyOpen.splice(index, 1);  
    currentElement.getElementsByClassName('left-arrow')[0].style.display = 'inline'; 
    currentElement.getElementsByClassName('down-arrow')[0].style.visibility = 'hidden'; 
  } else {
    currentElement.getElementsByClassName('left-arrow')[0].style.display = 'none'; 
    currentElement.getElementsByClassName('down-arrow')[0].style.visibility = 'visible'; 
    let html = htmlToElement(answers[id]); 
    currentElement.appendChild(html);
    currentlyOpen.push(id); 
  }
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

