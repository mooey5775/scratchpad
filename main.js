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
