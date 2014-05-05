// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext");
  var urltext = "javascript:".concat(jstext.text);
  var win = window.open(urltext, '_blank');
  win.focus();
}
