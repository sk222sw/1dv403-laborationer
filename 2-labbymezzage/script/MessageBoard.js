"use strict";

    var MessageBoard = {
        
        messages: [],
        
        init:function(e){
            
            MessageBoard.messages.push("1", 2, 54, "hej");
            console.log(MessageBoard.messages);
        }
    };

window.onload = MessageBoard.init;