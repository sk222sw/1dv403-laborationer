"use strict";

var Desktop = {
    
    init: function(){
    console.log("init");
    var iconImageViewer = document.getElementById("iconImageViewer");
        iconImageViewer.addEventListener("click", Desktop.createWindowObject);        
    },
    
    createWindowObject: function(){
        var name = new Window();
        name.openWindow();
        return false;
    }
};