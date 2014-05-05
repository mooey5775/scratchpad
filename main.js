// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext").value;
  eval(jstext);
}

function saveJS() {
  var jstext = document.getElementById("jstext").value;
  document.cookie = "jstext=".concat(jstext);
}
