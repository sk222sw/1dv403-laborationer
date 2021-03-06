"use strict";

window.onload = function(){
	
	var secret = Math.floor((Math.random() * 100) + 1); // Detta tal behöver bytas ut mot ett slumpat tal.
	var numberOfGuesses = 0;		//Initierar en variabel som håller reda på antalet gissningar.
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
	
		// Plats för förändring.
		

			if ((parseFloat(number) !== parseInt(number, 10)) || (isNaN(number))) {	//Kollar så att gissningen(number) är ett heltal och inte något annat.
				return [false, "Ange ett heltal!"];
			}
			
			numberOfGuesses +=1;			//Om gissningen är ett heltal så ökar numberOfGuesses med 1.
			
			if (number <= 0 || number >= 100) {
				return [false, "Talet är utanför intervallet 0 - 100!"];
			}
			
			else if (number == secret) {
				return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + numberOfGuesses + " gissningar för att hitta det."];
			}
			
			else if (number < secret) {
				return [false, "Det hemliga talet är högre!"];
			}
			
			else {
				return [false, "Det hemliga talet är lägre!"];

		}
		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};