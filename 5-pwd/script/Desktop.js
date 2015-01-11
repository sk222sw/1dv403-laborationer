"use strict";

var Desktop = {
    
    windowCounter: 0,
    
    init: function(){
    var iconImageViewer = document.getElementById("iconImageViewer");
        iconImageViewer.addEventListener("click", Desktop.createWindowObject);        
    },
    
    createWindowObject: function(){
        var name = "window"+Desktop.windowCounter;
        console.log(name);
        name = new Window();
        Desktop.windowCounter += 1;
        name.openWindow();
        console.log(Desktop.windowCounter);
        return false;
    }
};