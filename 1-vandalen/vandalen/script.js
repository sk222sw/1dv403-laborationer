"use strict";

/*
Din uppgift är att skapa en funktion utan sidoeffekter ("pure function") som tar en array innehållande ett 
godtyckligt antal objekt (personer med namn och ålder) som argument och returnerar ett nytt objekt. Det objekt 
som returneras ska innehålla information om den högsta åldern, lägsta åldern, medelåldern samt en sträng med 
samtliga namn sorterade i bokstavsordning.
*/

var makePerson = function(persArr){
    
    //Sortera efter namn:
    
    var names = persArr.map(function(value) {
       return value.name; 
    });
    
    names = names.sort(function(value1, value2){
        return value1.localeCompare(value2);
    }).join(", ");
    
    //persArr.names = names;

    //Sortera efter ålder: 
        var personsSortAge = persArr.sort(function(a, b) {
            return a.age - b.age;
        });
    
    //Tar ut det sista(största) elementet ur den sorterade arrayen och sätter det till maxAge.
    var maxAgeRet = personsSortAge[persArr.length -1].age;
    
    //Tar ut första(lägsta) elementet ur arrayen och sätter det till minAge
    var minAgeRet = personsSortAge[0].age;  
    
    //For-loop som lägger ihop åldrarna 
    var sum = 0;
    for (var personCounter = 0; personCounter < persArr.length; personCounter++) {
        sum += persArr[personCounter].age / persArr.length;
    }
    var averageAgeRet = Math.round(sum);
    
	return {
      "averageAge": averageAgeRet,
      "maxAge": maxAgeRet,
      "minAge": minAgeRet,
      "names": names
    }

};

/* gammal sortering: 
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

**/