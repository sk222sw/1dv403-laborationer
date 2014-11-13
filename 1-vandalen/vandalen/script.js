"use strict";

/*
Din uppgift är att skapa en funktion utan sidoeffekter ("pure function") som tar en array innehållande ett 
godtyckligt antal objekt (personer med namn och ålder) som argument och returnerar ett nytt objekt. Det objekt 
som returneras ska innehålla information om den högsta åldern, lägsta åldern, medelåldern samt en sträng med 
samtliga namn sorterade i bokstavsordning.
*/

var makePerson = function(persArr){
    persArr = persons;
 var persons = [
        {name: "John Häggerud", age: 37},
        {name: "Johan Leitet", age: 36}, 
        {name: "Mats Loock", age: 46}
        ];
    
    persons.sort(function compare(value1, value2) {
        value1 = value1.name;
        value2 = value2.name;
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    });
    
    persons.names = persons.map(function(persons){
        return persons.name;
    }).join(", ");

    //Sortera efter ålder: 
    
    var personsSortAge = persons.sort(function(a, b) {
            return a.age - b.age;
        });
    
    persons.maxAge = personsSortAge[persons.length -1].age;
    
    persons.minAge = personsSortAge[0].age;  
    
    var sum = 0;
    for (var personCounter = 0; personCounter < persons.length; personCounter++) {
        sum += Math.round(persons[personCounter].age / persons.length);
    }
    
    persons.averageAge = sum;
    
    /*
    for (int salaryCounter = 0; salaryCounter < salaries.Length; salaryCounter++)
            {
                salaries[salaryCounter] = ReadInt("Ange lön nummer " + (salaryCounter + 1) + ": ");
            }
    */
	
    return persons;
    
};

