"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		var userBirthdate = new Date(date);
		
		var userBirthday = userBirthdate.getDay();
		var userBirthmonth = userBirthdate.getMonth() + 1;
		var userBirthyear = userBirthdate.getFullYear();
		
		var currentDate = new Date();
		var currentMonth = currentDate.getMonth() + 1;
		var currentDay = currentDate.getDate();
		var currentYear = currentDate.getFullYear();
		
		if (userBirthyear < currentYear) {
			userBirthdate.setFullYear(currentDate.getFullYear());
		}
		
		if (userBirthyear > currentYear) {
			userBirthdate.setFullYear(currentDate.getFullYear()) +1;
		}
		
		
		var msDifference =  userBirthdate.getTime() - currentDate.getTime() ;
		var dayDifference = Math.floor(msDifference / 1000 / 3600 / 24) +1;
		
		//Om användaren redan fyllt år så blir det inte -(antal dagar kvar)
		if (dayDifference < 0) {					
			dayDifference = dayDifference * 2 +365;
		}
		
		return dayDifference;
		
	/*	date = new Date(date);
		var today = new Date();
		// var msToDays = 1000 / 3600 / 24;				funkar inte?
		var birthday = Math.floor(Date.parse(date) / 1000 / 3600 / 24);
		
		return Math.floor(birthday - (Date.parse(today) / 1000 / 3600 / 24) + 1); */
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