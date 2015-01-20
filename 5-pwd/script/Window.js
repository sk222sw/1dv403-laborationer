"use strict";

var Window = function() {};

Window.prototype.counter = 1;

Window.prototype.openWindow = function(name){
    var main = document.getElementById("main");
    // var menu = document.createElement("div");
    var content = document.createElement("div");
    var topBar = document.createElement("div");
    var secondTop = document.createElement("div");
    var statusBar = document.createElement("div");
    var frame = document.createElement("div");
    var closeButton = document.createElement("div");
    var responseArray = [];
    var loading = document.createElement("div");
    
    frame.id = "frame";
    closeButton.classList.add("windowClose");
    frame.classList.add("newWindow");
    content.classList.add("windowContent");
    content.setAttribute("id", "windowContent");
    topBar.classList.add("windowTopBar");
    secondTop.classList.add("windowSecondTopBar");
    statusBar.classList.add("windowStatusBar");
    loading.setAttribute("id", "loading");
    
    secondTop.innerHTML = "Image Viewer";
    
    closeButton.addEventListener("click", Window.prototype.closeWindow, false);
    
    frame.appendChild(topBar);
    frame.appendChild(secondTop);
    frame.appendChild(content);
    statusBar.appendChild(loading);
    frame.appendChild(statusBar);
    secondTop.appendChild(closeButton);
    main.appendChild(frame);
    Window.prototype.counter += 1;
};

Window.prototype.closeWindow = function(){
    var main = document.getElementById("main");
    var frame = document.getElementById("frame");
    main.removeChild(frame);
    console.log("closed");  
    return false;
};