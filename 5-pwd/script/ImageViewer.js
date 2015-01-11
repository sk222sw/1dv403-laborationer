"use strict";

// http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/

var ImageViewer = function(){};
    ImageViewer.prototype.pictures = [];
    ImageViewer.prototype.thumbnails = [];
    
    ImageViewer.prototype.xhrRequest = function(){
        var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 &&
                        xhr. status <= 300 ||
                        xhr.status === 304) {
                        console.log("xhr klar");
                        var JSONreturn = JSON.parse(xhr.responseText);
                        
                        return JSONreturn;
                        
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
    
    // ImageViewer.prototype.getThumbNails = function(JSONreturn){
    //         for (var i = 0; i < JSONreturn.length; i++) {
    //             ImageViewer.prototype.thumbnails.push(JSONreturn[i].thumbURL);
                
    //         }
    // };
    
    ImageViewer.prototype.openWindow = function(){
        Window.prototype.openWindow.call(this);
    };
    
    ImageViewer.prototype.getPictures = function(){
        
    };
