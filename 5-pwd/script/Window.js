"use strict";

var Window = function() {};

Window.prototype.counter = 1;

Window.prototype.openWindow = function(name){
    var main = document.getElementById("main");
    // var menu = document.createElement("div");
    var content = document.createElement("div");
    var topBar = document.createElement("div");
    var statusBar = document.createElement("div");
    var frame = document.createElement("div");
    var closeButton = document.createElement("div");
    var responseArray = [];
    
    console.log(responseArray)
    
    frame.id = "frame";
    closeButton.classList.add("windowClose");
    frame.classList.add("newWindow");
    content.classList.add("windowContent");
    topBar.classList.add("windowTopBar");
    statusBar.classList.add("windowStatusBar");
    
    closeButton.addEventListener("click", Window.prototype.closeWindow, false);
    statusBar.innerHTML = Window.prototype.counter;
    
    frame.appendChild(topBar);
    frame.appendChild(content);
    frame.appendChild(statusBar);
    topBar.appendChild(closeButton);
    main.appendChild(frame);
    Window.prototype.counter += 1;
    console.log("WIndow created!!!!!!");
};

Window.prototype.closeWindow = function(){
    var main = document.getElementById("main");
    var frame = document.getElementById("frame");
    main.removeChild(frame);
    console.log("closed");  
    return false;
};