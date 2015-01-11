"use strict";

var Window = function() {};

Window.prototype.openWindow = function(){
    var main = document.getElementById("main");

    // var menu = document.createElement("div");
    var content = document.createElement("div");
    var topBar = document.createElement("div");
    var statusBar = document.createElement("div");
    var frame = document.createElement("div");
    
    frame.classList.add("newWindow");
    content.classList.add("windowContent");
    topBar.classList.add("windowTopBar");
    statusBar.classList.add("windowStatusBar");
    
    
    frame.appendChild(topBar);
    frame.appendChild(content);
    frame.appendChild(statusBar);
    main.appendChild(frame);
    
    console.log("WIndow created!!!!!!");
};