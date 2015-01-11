"use strict";

// http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/

var ImageViewer = {
    xhrRequest: function(){
        var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 &&
                        xhr. status <= 300 ||
                        xhr.status === 304) {
                        
                        var JSONreturn = xhr.responseText;
                        console.log(JSONreturn);
                    } else {
                        console.log("felkod: " + xhr.status);
                    }
                } else {
                    console.log("readystate är " + xhr.readyState);     
                }
            };
            xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
            xhr.send(null);
    }
};