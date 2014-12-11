"use strict";

    var MessageBoard = {
                
        messages: [],
        
        init:function(e){
            var submit = document.getElementById("submit");
            var textarea = document.getElementById("textarea");
            
            submit.onclick = MessageBoard.createMessage;

        },
        
        createMessage: function (e){
            MessageBoard.messages.push(new Message(textarea.value, new Date()));
            MessageBoard.writeMessages(MessageBoard.messages);
            return false; // för att förhindra att sidan defaultladdas om
        },
        
        writeThisMessage: function(){

        },
        
        writeMessages: function (message) {
            
            MessageBoard.textarea.placeholder = "Skriv här";
            MessageBoard.textarea.value = "";   //Tar bort den inskrivna texten
            
            MessageBoard.content.innerHTML = "";  //Raderar alla meddelanden innan loopen skriver ut dem igen
            
            for (var i = 0; i < MessageBoard.messages.length; i++) {
                MessageBoard.writeThisMessage(i);
            }
            
        },
    
    };

        // var para = document.createElement("p");
        // var node = document.createTextNode("This is new.");
        // para.appendChild(node);
        // var element = document.getElementById("div1");
        // element.appendChild(para);            


window.onload = MessageBoard.init;