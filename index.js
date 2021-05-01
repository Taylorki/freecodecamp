function showIam() {
  document.getElementById("iam").style.visibility = "visible";
}

function showOld() {
    document.getElementById("old").style.visibility = "visible";
  }

function openNav() {
  document.getElementById("mySidebar").style.width = "25vw";
  document.getElementById("main").style.marginLeft = "25vw";
  document.getElementById("open-console").style.visibility = "hidden";
  document.getElementById("log-1").style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("log-2").style.visibility = "visible";
  }, 2000);
  setTimeout(function () {
    document.getElementById("log-3").style.visibility = "visible";
  }, 4000);
  setTimeout(function () {
    document.getElementById("log-4").style.visibility = "visible";
  }, 6000);
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("open-console").style.visibility = "visible";
}

openNav();
