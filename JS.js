document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter" || event.key === "Intro") {
      event.preventDefault();
      encrypt();
    }
  });
function encrypt() {
    var input = document.getElementById("input").value;
    var output = "";
    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        output += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        output += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
      } else {
        output += input.charAt(i);
      }
    }
    document.getElementById("output").value = output;
  }
  
  function decrypt() {
    var input = document.getElementById("input").value;
    var output = "";
    for (var i = 0; i < input.length; i++) {
      var charCode = input.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        output += String.fromCharCode(((charCode - 65 - 13 + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        output += String.fromCharCode(((charCode - 97 - 13 + 26) % 26) + 97);
      } else {
        output += input.charAt(i);
      }
    }
    document.getElementById("output").value = output;
  }

  