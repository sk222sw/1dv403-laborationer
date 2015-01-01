"use strict";

var Memory = {
    turned: 0,     //håller reda på om 1 bricka redan vänts upp.
    lastTurned: null,    //håller reda på vad förra brickan hade för array-index
    thisTurned: null,    //håller reda på vad denna bricka har för array-index
    maxTurned: null,    //används för att kolla när man vinner.    
    
    init: function(){
        var cols = 4;   
        var rows = 4;
        var picArray = RandomGenerator.getPictureArray(cols, rows);
        Memory.maxTurned = cols * rows;    //håller reda på hur många brickor som ska vara vända när man vinner.
        
        
        
        Memory.generateAll(picArray);
    },
    
    newGame: function(){
        var cols = 4;
        var rows = 4;
        var picArray = RandomGenerator.getPictureArray(cols, rows);
        var maxTurned = cols * rows;
    },
    
    generateAll: function(picArray) {
        for (var i = 0; i < picArray.length; i++) {
            var arrayIndex = picArray[i];
            var thisPic = arrayIndex;
            Memory.generatePic(thisPic);
        }
        return false;
    },
    
    generatePic: function(thisPic) {
        var memory = document.getElementById("memory");
        var picture = document.createElement("img");
        
        picture.setAttribute("src", "memory/pics/" + 0+".png");
        memory.appendChild(picture);
        
        picture.onclick = function() {
            picture.removeAttribute("src");
            picture.setAttribute("src", "memory/pics/" + thisPic + ".png");
            
        console.log(Memory.lastTurned);
        
        if (Memory.lastTurned === thisPic) {
            Memory.matchingBricks();
        }
        
        else {
        //Ändra tillbaka efter lite tid
            setTimeout(function(){
                picture.removeAttribute("src");
                picture.setAttribute("src", "memory/pics/" + 0 + ".png"); 
            }, 2000);             
        }
        
        Memory.lastTurned = thisPic;
        

            
        };
        
        return false;
    },
    
    //När två brickor matchas körs denna funktion:
    matchingBricks: function() {
        Memory.turned += 2;
        console.log("Nu äre " + Memory.turned);
        if (Memory.turned === Memory.maxTurned) {
            alert("Du vann!");
        }
    }

    
    
};

window.onload = Memory.init;




