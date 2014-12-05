"use strict";

    var MessageBoard = {
                
        messages: [],
        
        init:function(e){
            var submit = document.getElementById("submit");
            var textarea = document.getElementById("textarea");
            
            e.preventDefault();
            
            submit.onclick = MessageBoard.createMessage;

        },
        
        createMessage: function (){
            var textarea = document.getElementById("textarea");
            
            MessageBoard.messages.push(new Message(textarea.value, new Date()));
            return false; // för att förhindra att sidan defaultladdas om
        },
    };

            


window.onload = MessageBoard.init;