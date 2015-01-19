"use strict";

// http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/

var ImageViewer = function(){};
    ImageViewer.prototype.pictures = [];
    ImageViewer.thumbnails = [];
    
    ImageViewer.prototype.xhrRequest = function(){
        var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 &&
                        xhr. status <= 300 ||
                        xhr.status === 304) {
                        console.log("xhr klar");
                        var JSONreturn = JSON.parse(xhr.responseText);
                        ImageViewer.prototype.getThumbNails(JSONreturn);

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
        var temp = JSONreturn;
        for (var object in JSONreturn){
        
            var thumbDiv = document.createElement("div");
            var thumbImg = document.createElement("img");
            var id = thumbDiv.setAttribute("class", "thumb"+urlCount);
            var thisURL = JSONreturn[urlCount].URL;
            
            thumbImg.setAttribute("src", JSONreturn[object].thumbURL);
            thumbDiv.classList.add("thumbDiv");
            thumbDiv.setAttribute("style", "width:"+JSONreturn[object].width);
            thumbDiv.setAttribute("style", "height:"+JSONreturn[object].height);

            ImageViewer.prototype.setBackground(JSONreturn[object].URL, thumbDiv)
            
            thumbDiv.appendChild(thumbImg);
            windowContent.appendChild(thumbDiv);
            urlCount += 1;
            // console.log(JSONreturn[URL].thumbURL);
        }

        
        
    };
    // image:url(
    ImageViewer.prototype.setBackground = function(JSONurl, thumbDiv){
        
        thumbDiv.addEventListener("click", function(){
            var main = document.getElementById("main");
            main.setAttribute("style", "background-image:url("+JSONurl+")");
        });
        
    };
    
    ImageViewer.prototype.openWindow = function(){
        Window.prototype.openWindow.call(this);
        ImageViewer.prototype.xhrRequest();

    };
    
    ImageViewer.prototype.getPictures = function(){
        
    };
