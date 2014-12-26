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
        var memory = document.getElementById("memory");

        var picture = document.createElement("img");
        
        picture.setAttribute("src", "memory/pics/" + 0+".png");
        memory.appendChild(picture);
        
        picture.onclick = function() {
            picture.removeAttribute("src");
            picture.setAttribute("src", "memory/pics/" + thisPic);
        };
        
        return false;
    },
    
    changeURL: function(thisPic){
    }
    
};

window.onload = Memory.init;