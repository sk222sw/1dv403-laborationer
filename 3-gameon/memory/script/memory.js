"use strict";

var Memory = {
    picArray: RandomGenerator.getPictureArray(4, 4),

    init: function(){
        console.log(Memory.picArray);
        Memory.generateAll();
    },
    
    generateAll: function() {
        for (var i = 0; i < Memory.picArray.length; i++) {
            var arrayIndex = Memory.picArray[i];
            var thisPic = arrayIndex + ".png";
            Memory.generatePic(thisPic);
        }
        return false;
    },
    
    generatePic: function(thisPic) {
        console.log(Memory.picArray);
        
        var memory = document.getElementById("memory");
        
        var arre = document.getElementById("arre");
        var arre2 = document.getElementById("tede");
        var picture = document.createElement("img");
        
        picture.setAttribute("src", "memory/pics/" + thisPic);
        memory.appendChild(picture);
        
        return false;
    }
    
};

window.onload = Memory.init;