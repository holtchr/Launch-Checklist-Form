// Write your JavaScript code here!
window.addEventListener("load", function() {
   let launchForm = document.getElementById('launchForm');
   launchForm.addEventListener("submit", function(event) {

      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;

      //validate that all fields have been entered
      if (pilotName === '' || copilotName === '' || fuelLevel === '' || cargoMass === '') {
         window.alert("All fields are required!")
         event.preventDefault();
      }
      
      //validate that pilot and copilot names are strings that contain only letters
      let letters = /^[A-Za-z]+$/;
      if ( !(pilotName.match(letters)) || !(copilotName.match(letters)) ) {
         window.alert("Pilot and Copilot Names must be strings.")
         event.preventDefault();
      }

      //validate that fuel level and cargo mass are numbers
      fuelLevel = Number(fuelLevel);
      cargoMass = Number(cargoMass);
      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         window.alert("Fuel Level and Cargo Mass must be numbers.")
         event.preventDefault();
      }
   });
});








/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
