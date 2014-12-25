"use strict";

var Memory = {
    picArray: RandomGenerator.getPictureArray(3, 4),
    
    init: function(){
        console.log(Memory.picArray);
        Memory.writer();
    },
};

window.onload = Memory.init;