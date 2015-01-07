"use strict";

// Inspiration för "twoCardArray"-strukturen
// http://www.developphp.com/view.php?tid=1393

var Memory = {
    turned: 0,     
    oneTurned: 0,       //håller reda på om 1 bricka redan vänts upp.    
    maxTurned: null,    //används för att kolla när man vinner.    
    twoCardArray: [],   
    
    init: function(){
        var cols = 4;   
        var rows = 4;
        var picArray = RandomGenerator.getPictureArray(cols, rows);
        Memory.maxTurned = cols * rows;    //håller reda på hur många brickor 
                                           //som ska vara vända när man vinner.
        console.log("init oneturned är " + Memory.oneTurned);                                   
        Memory.generateAll(picArray);
    },
    
    newGame: function(){
        var cols = 4;
        var rows = 4;
        var picArray = RandomGenerator.getPictureArray(cols, rows);
        var maxTurned = cols * rows;
    },
    
    //Loopar igenom arrayen och skickar med indexet till generatePic()
    generateAll: function(picArray) {
        for (var i = 0; i < picArray.length; i++) {
            var thisPic = picArray[i];
            Memory.generatePic(thisPic);
        }
        return false;
    },
    
    //Genererar en bild med dess attribut
    generatePic: function(thisPic) {
        var memory = document.getElementById("memory");
        var picture = document.createElement("img");

        picture.setAttribute("id", "picture" + thisPic);
        picture.setAttribute("class", "defaultImage");
        memory.appendChild(picture);
        
            picture.onclick = function() {
                if (Memory.twoCardArray.length < 2) {
                    
                    picture.removeAttribute("src");
                    picture.setAttribute("src", "memory/pics/" + thisPic + ".png");     
                    
                    //Om ingen bricka är vänd än    
                    if (Memory.twoCardArray.length === 0) {
                        Memory.twoCardArray.push(thisPic);
                    } else if (Memory.twoCardArray.length === 1) {
                        Memory.twoCardArray.push(thisPic);
                        if (Memory.twoCardArray[0] === Memory.twoCardArray[1]) {
                            //Två matchande brickor
                            alert("hit");
                            Memory.twoCardArray = [];
                        } else {
                            //Vänd tillbaka
                            setTimeout(function(){
                                var pic1 = document.getElementById("picture" + Memory.twoCardArray[0]);
                                var pic2 = document.getElementById("picture" + Memory.twoCardArray[1]);
                                
                                pic1.setAttribute("src", "memory/pics/0.png");
                                pic2.setAttribute("src", "memory/pics/0.png");
                                Memory.twoCardArray = [];                            
                            }, 800)
    
                        }
                    }
                } 
            }; //onclick stop

        return false;
    },
    
    changeLastPic: function(){
        
    },
    
    //När två brickor matchas körs denna funktion:
    matchingBricks: function(thisPic) {
        Memory.turned += 2;
        console.log("Nu äre " + Memory.turned);
        if (Memory.turned === Memory.maxTurned) {
            alert("Du vann!");
        }
    }

    
    
};

window.onload = Memory.init;    




