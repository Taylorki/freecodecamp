function showIam() {
  console.log("hello");
  document.getElementById("iam").style.visibility = "visible";
}

function hideIam() {
  console.log("go away");
  document.getElementById("iam").style.visibility = "hidden";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
