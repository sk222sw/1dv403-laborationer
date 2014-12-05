"use strict";

    var MessageBoard = {
                
        messages: [],
        
        init:function(e){
            var submit = document.getElementById("submit");
            var textarea = document.getElementById("textarea");
            
            submit.onclick = MessageBoard.createMessage;

        },
        
        createMessage: function (){
            var textarea = document.getElementById("textarea");
            
            MessageBoard.messages.push(new Message(textarea.value, new Date()));
            textarea.placeholder = "Skriv ditt meddelande.";
            var toText = textarea.value;
            MessageBoard.writeMessage(toText);
            return false; // för att förhindra att sidan defaultladdas om
        },
        
        writeMessage: function (message) {
            var div = document.getElementById("msgText");
            document.getElementById("msgText").innerHTML = message;
        }
    };

            


window.onload = MessageBoard.init;