// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext").value;
  eval(jstext);
}

function saveJS() {
  var jstext = document.getElementById("jstext").value;
  localStorage.["jstext"] = jstext;
}

function loadJS() {
  var jstext=localStorage.["jstext"];
  if (jstext!="")
  {
    document.getElementById("jstext").value = jstext;
  }
  else 
  {
    alert("No save!");
  }
}
