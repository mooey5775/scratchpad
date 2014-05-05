// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext").value;
  eval(jstext);
}

function saveJS() {
  var jstext = document.getElementById("jstext").value;
  document.cookie = "jstext=".concat(jstext);
}

function loadJS() {
  var jstext=getCookie("jstext");
  if (jstext!="")
  {
    document.getElementById("jstext").value = jstext;
  }
  else 
  {
    alert("No save!");
  }
}

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
return "";
}
