"use strict";

// http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/

var ImageViewer = function(){};
    ImageViewer.prototype.pictures = [];
    ImageViewer.prototype.thumbnails = [];
    ImageViewer.prototype.windowCounter = 0;
    
    ImageViewer.prototype.xhrRequest = function(){
        var that = this;
        var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 &&
                        xhr. status <= 300 ||
                        xhr.status === 304) {
                        var JSONreturn = JSON.parse(xhr.responseText);
                        var status = document.querySelectorAll("windowStatusBar");
                        var loading = document.getElementById("loading");
                        ImageViewer.prototype.getThumbNails(JSONreturn);
                        loading.setAttribute("style", "background-image:none");
                        

                    } else {
                        console.log("felkod: " + xhr.status);
                    }
                }
            };
            xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
            xhr.send(null);
    };
    
    // ImageViewer.prototype.returnPusher = function(JSONreturn){
        
    //     var windowContent = document.getElementById("windowContent");    
            
    //         var img = document.createElement("img");
            
    //         var ett = JSONreturn[1].thumbURL;
    //         img.setAttribute("src", ett);
    //         console.log(ett);
            
    //         windowContent.appendChild(img);
            
    //     // for (var i = 0; i < 4/*JSONreturn.length*/; i++) {
    //     //     main.appendChild(JSONreturn[i].thumbURL);
    //     // }
    // }
    
    ImageViewer.prototype.getThumbNails = function(JSONreturn){
        var windowContent = document.getElementById("windowContent");
        var urlCount = 0;
            var width = 0;
            var height = 0;
            
            console.log("Json length: " + JSONreturn.length)
            
        //Kolla högsta och lägsta width/height och sätt dem till variabler.    
        for (var i = 0; i < JSONreturn.length; i++) {
            if (JSONreturn[i].thumbWidth > width) {
                width = JSONreturn[i].thumbWidth;
            }
            if (JSONreturn[i].thumbHeight > height) {
                height = JSONreturn[i].thumbHeight;
                
            }
        }    
            
        for (var object in JSONreturn){
        
            var thumbDiv = document.createElement("div");
            var thumbImg = document.createElement("img");
            var id = thumbDiv.setAttribute("class", "thumb"+urlCount);
            var thisURL = JSONreturn[urlCount].URL;

            thumbImg.classList.add("thumbImg");
            thumbImg.setAttribute("src", JSONreturn[object].thumbURL);
            thumbDiv.classList.add("thumbDiv");
            
            //istället för setattribute(style) som skriver över det tidigare style-attributet
            thumbDiv.style.width = width+"px";
            thumbDiv.style.height = height+"px";
            

            ImageViewer.prototype.setBackground(JSONreturn[object].URL, thumbDiv)
            
            thumbDiv.appendChild(thumbImg);
            windowContent.appendChild(thumbDiv);
            urlCount += 1;
        }
        
    };
    ImageViewer.prototype.setBackground = function(JSONurl, thumbDiv){
        
        thumbDiv.addEventListener("click", function(){
            var main = document.getElementById("main");
            main.setAttribute("style", "background-image:url("+JSONurl+")");
        });
        
    };
    
    ImageViewer.prototype.openWindow = function(){
        
        if (ImageViewer.prototype.windowCounter < 1) {
            Window.prototype.openWindow.call(this);
            ImageViewer.prototype.xhrRequest();
            ImageViewer.prototype.windowCounter = 1;
        }

    };