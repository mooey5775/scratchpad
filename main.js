// Hello.
function viewJS() {
  var jstext = document.getElementById("jstext").value;
  try {
    eval(jstext);
  }
  catch(err) {
    alert('Error: '.concat(err.message));
  }
}

function saveJS() {
  var jstext = document.getElementById("jstext").value;
  var name = prompt("Name of file", "Untitled");
  if (name != "") {
    if (localStorage.getItem("jstext_".concat(name)) != null) {
      var yes = confirm('Do you want to overwrite the existing file: '.concat(name).concat("?"));
      if (yes == true) {
        localStorage.setItem("jstext_".concat(name), jstext);
      }
    } else {
      localStorage.setItem("jstext_".concat(name), jstext);
      alert('Saved!');
    }
  } else {
    alert('Please enter a name.');
    saveJS();
  }
}

function loadJS() {
  var files = "";
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.substr(0, 6) == "jstext") {
      files = files.concat(key.substr(7)).concat(" | ");
    }
  }
  var name = prompt("Choose file: ".concat(files))
  var jstext=localStorage.getItem("jstext_".concat(name));
  if (jstext === null)
  {
    alert("No save found!");
  }
  else 
  {
    document.getElementById("jstext").value = jstext;
  }
}

function viewHTML() {
  var htmltext = document.getElementById("htmltext").value;
  localStorage.setItem("htmltext", htmltext);
  var win = window.open("viewhtml.html", "_blank");
  win.focus();
}

function saveHTML() {
  var jstext = document.getElementById("htmltext").value;
  var name = prompt("Name of file", "Untitled");
  if (name != "") {
    if (localStorage.getItem("htmltext_".concat(name)) != null) {
      var yes = confirm('Do you want to overwrite the existing file: '.concat(name).concat("?"));
      if (yes == true) {
        localStorage.setItem("htmltext_".concat(name), jstext);
      }
    } else {
      localStorage.setItem("htmltext_".concat(name), jstext);
      alert('Saved!');
    }
  } else {
    alert('Please enter a name.');
    saveHTML();
  }
}

function loadHTML() {
  var files = "";
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.substr(0, 8) == "htmltext") {
      files = files.concat(key.substr(9)).concat(" | ");
    }
  }
  var name = prompt("Choose file: ".concat(files))
  var jstext=localStorage.getItem("htmltext_".concat(name));
  if (jstext === null)
  {
    alert("No save found!");
  }
  else 
  {
    document.getElementById("htmltext").value = jstext;
  }
}
