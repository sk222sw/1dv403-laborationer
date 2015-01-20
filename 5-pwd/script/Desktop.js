"use strict";

var Desktop = {
    
    windowCounter: 0,
    
    init: function(){
    var iconImageViewer = document.getElementById("iconImageViewer");
        iconImageViewer.addEventListener("click", Desktop.createWindowObject);        
    },
    
    createWindowObject: function(){
        var name = "window"+Desktop.windowCounter;
        name = new ImageViewer();
        Desktop.windowCounter += 1;
        name.openWindow();

        return false;
    }
};