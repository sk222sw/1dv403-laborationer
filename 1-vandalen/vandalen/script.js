"use strict";

/*
Din uppgift är att skapa en funktion utan sidoeffekter ("pure function") som tar en array innehållande ett 
godtyckligt antal objekt (personer med namn och ålder) som argument och returnerar ett nytt objekt. Det objekt 
som returneras ska innehålla information om den högsta åldern, lägsta åldern, medelåldern samt en sträng med 
samtliga namn sorterade i bokstavsordning.
*/

var makePerson = function(persArr){

    var persons = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    
    function compare(value1, value2) {
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
    
    var ageSorted = persons(compare);
    persons.minAge = ageSorted[0];    
    //persons = sortPersons();
    
    persons.names = persons.name;

    persons.maxAge = persons.age;
    persons.averageAge = persons.age;
    
	var persObj = {};
	persObj.names;
	persObj.age;
	
	var returnObj = {};
	returnObj.names;
	returnObj.minAge;
	
    return persons;
    
};

