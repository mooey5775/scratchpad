// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext").value;
  eval(jstext);
}

function saveJS() {
  var jstext = document.getElementById("jstext").value;
  localStorage.setItem("jstext", jstext);
}

function loadJS() {
  var jstext=localStorage.getItem("jstext");
  if (jstext === null)
  {
    alert("No save!");
  }
  else 
  {
    document.getElementById("jstext").value = jstext;
  }
}

function saveHTML() {
  var htmltext = document.getElementById("htmltext").value;
  localStorage.setItem("htmltext", htmltext);
}

function loadHTML() {
  var htmltext=localStorage.getItem("htmltext");
  if (htmltext === null)
  {
    alert("No save!");
  }
  else 
  {
    document.getElementById("htmltext").value = htmltext;
  }
}
