// Write your JavaScript code here!
window.addEventListener("load", function() {
   let launchForm = document.getElementById('launchForm');
   launchForm.addEventListener("submit", function(event) {

      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;

      //validate that all fields have been entered
      if (pilotName === '' || copilotName === '' || fuelLevel === '' || cargoMass === '') {
         window.alert("All fields are required!")
      }
      
      //validate that pilot and copilot names are strings that contain only letters
      let letters = /^[A-Za-z]+$/;
      if ( !(pilotName.match(letters)) || !(copilotName.match(letters)) ) {
         window.alert("Pilot and Copilot Names must be strings.")
      }

      //validate that fuel level and cargo mass are numbers
      fuelLevel = Number(fuelLevel);
      cargoMass = Number(cargoMass);
      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         window.alert("Fuel Level and Cargo Mass must be numbers.")
      }

      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      pilotStatus.innerHTML = `Pilot ${pilotName} is Ready.`;
      copilotStatus.innerHTML = `Copilot ${copilotName} is Ready.`;

      if (fuelLevel < 10000 || cargoMass > 10000) {
         faultyItems.style.visibility = "visible";
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Not enough fuel for launch";
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         }
         if (cargoMass > 10000) {
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
      } else {         
         faultyItems.style.visibility = "hidden";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle ready for launch";
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
