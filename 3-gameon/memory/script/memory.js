"use strict";

// Inspiration för "twoCardArray"-strukturen
// http://www.developphp.com/view.php?tid=1393

var Memory = {
    turned: 0,     
    maxTurned: null,    //används för att kolla när man vinner.    
    twoCardArray: [],   
    cardPosition: [],
    counter: 0,
    
    init: function(){
        var cols = 4;   
        var rows = 4;
        var picArray = RandomGenerator.getPictureArray(cols, rows);
        Memory.maxTurned = cols * rows;    //håller reda på hur många brickor 
                                           //som ska vara vända när man vinner.
        Memory.generateAll(picArray);
    },

    //Loopar igenom arrayen och skickar med indexet till generatePic()
    generateAll: function(picArray) {
        for (var i = 0; i < picArray.length; i++) {
            var thisPic = picArray[i];
            var picValue = i;
            Memory.generatePic(thisPic, picValue);
        }
        return false;
    },

    //Genererar en bild med dess attribut
    generatePic: function(thisPic, picValue) {
        var memory = document.getElementById("memory");
        var aTag = document.createElement("a");
        var picture = document.createElement("img");

        aTag.setAttribute("href", "#");
        aTag.setAttribute("rel", "thisPic")
        picture.setAttribute("id", "picture" + picValue);
        picture.setAttribute("src", "memory/pics/0.png");
        picture.setAttribute("value", thisPic);
        picture.setAttribute("class", "defaultImage");
        
        var picSource = picture.src;    

        memory.appendChild(aTag);
        aTag.appendChild(picture);
        
            picture.onclick = function() {
                if (Memory.twoCardArray.length < 2) {
                    
                        if (picture.src === picSource) {
                            
                            picture.removeAttribute("src");
                            picture.setAttribute("src", "memory/pics/" + thisPic + ".png");     
                            
                            //Om ingen bricka är vänd än    
                            if (Memory.twoCardArray.length === 0) {
                                
                                Memory.twoCardArray.push(picValue);
                                Memory.cardPosition.push(thisPic);
                                
                            } else if (Memory.twoCardArray.length === 1) {
                                
                                Memory.twoCardArray.push(picValue);
                                Memory.cardPosition.push(thisPic);
                                
                                if (Memory.cardPosition[0] === Memory.cardPosition[1]) {
                                    //Två matchande brickor
                                    Memory.matchingBricks();
                                    Memory.twoCardArray = [];
                                    Memory.cardPosition = [];
    
                                } else if(Memory.twoCardArray.length === 2) {
                                    //Vänd tillbaka
                                    Memory.flipBricks();
                                }
                            }
                        }   else if(Memory.twoCardArray.length === 2) {
                            Memory.flipBricks();
                        }
                    } else {
                    return 0;
                }
                
                Memory.countTries();                    
            }; //onclick stop

        return false;
    },
    
    countTries: function(){
        var tries = document.getElementById("tries");
        Memory.counter++;
        tries.innerHTML = "Antal försök: " + Memory.counter;
    },
    
    flipBricks: function(){
        setTimeout(function(){
            var pic1 = document.getElementById("picture" + Memory.twoCardArray[0]);
            var pic2 = document.getElementById("picture" + Memory.twoCardArray[1]);

            pic1.setAttribute("src", "memory/pics/0.png");
            pic2.setAttribute("src", "memory/pics/0.png");
            Memory.twoCardArray = [];      
            Memory.cardPosition = [];
        }, 800);
    },
    
    //När två brickor matchas körs denna funktion:
    matchingBricks: function(thisPic) {
            Memory.turned += 2;

        if (Memory.turned === Memory.maxTurned) {
            alert("Du klarade spelet på " + Memory.counter + " drag!");
        }
    }
};

window.onload = Memory.init;    




