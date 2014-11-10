"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var userBirthdate = new Date(date);

		var userBirthyear = userBirthdate.getFullYear();
		
		var currentDate = new Date();
		var currentYear = currentDate.getFullYear();
		
		//Kasta undantag om årtalet är NaN eller längre än 4 siffror.
		if (userBirthdate % 1 !== 0 || userBirthyear.length > 4) {
			throw new Error("Fel inmatat värde.");
		}	
		else {
			//Om födelseåret är före det nuvaranda så sätts födelseåret till samma som nuvarande år så att uträkningen går rätt till...
			if (userBirthyear < currentYear) {
				userBirthdate.setFullYear(currentDate.getFullYear());
			}
			
			//... och samma sak om någon reser i tiden och är född i framtiden.
			if (userBirthyear > currentYear) {
				userBirthdate.setFullYear(currentDate.getFullYear()) +1;
			}
			
			//Räknar ut födelsedatumet i ms, och drar bort dagens datum i ms.
			var msDifference =  userBirthdate.getTime() - currentDate.getTime();
			//gör om ms till dagar och rundar till heltal. (gjorde ny variabel för
			//läsbarhetens skull. dumt?)
			var dayDifference = Math.floor(msDifference / 1000 / 3600 / 24) +1;
			
			//Om användaren redan fyllt år så blir det inte -(antal dagar kvar)
			if (dayDifference < 0) {					
				dayDifference = dayDifference + 365;
			}
		
		return dayDifference;
					
		}
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};