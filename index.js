const logs = {
  1: "> Initiating...",
  2: "> Gathering data from subject with id #SEBA-25-6-6-93...",
  3: "> Checking subject's Facebook activity log...",
  4: "> Done",
  5: '> subjectAlive ? "I am" : "I was"',
  6: '> subjectHappy ? "young" : "old"',
};

const logIdsInUse = [];

function showLog(id) {
  if (!logIdsInUse.includes(id)) {
    let node = document.createElement("P");
    let textNode = document.createTextNode(logs[id]);
    node.appendChild(textNode);
    document.getElementById("log-files").appendChild(node);
    logIdsInUse.push(id);
  }
}

function showOld() {
  document.getElementById("old").style.visibility = "visible";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "25vw";
  document.getElementById("main").style.marginLeft = "25vw";
  document.getElementById("open-console").style.visibility = "hidden";
  showLog(1);
  setTimeout(function () {
    showLog(2);
  }, 2000);
  setTimeout(function () {
    showLog(3);
  }, 4000);
  setTimeout(function () {
    showLog(4);
  }, 6000);
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("open-console").style.visibility = "visible";
}

openNav();
