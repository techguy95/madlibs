function showMadLib()
  {
      // Get the values of HTML input boxes
      // with the IDs "noun", "verb", and "adjective"
      var noun = document.getElementById('noun').value;
      var verb = document.getElementById('verb').value;
      var adjective = document.getElementById('adjective').value;
      // For testing purposes, display the values in the console
      console.log(noun, verb, adjective);

      // Make the madlib and save it to a variable
      var madLib = createMadLib(noun, verb, adjective);
      console.log(madLib);

      // Make a JavaScript object for the HTML element with id "madlib"
      document.getElementById("madlib").textContent = madLib

  }

function createMadLib(noun, verb, adjective)
  {
      return ("Vincent " + verb + " the " + noun + " while running away from the " + adjective + " person!");
  }

var submit = document.getElementById("submit");
submit.addEventListener('click', showMadLib);

  //test createMadLib function
  //createMadLib("dog", "spanked", "weird");
