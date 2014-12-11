"use strict";

    var MessageBoard = {
                
        messages: [],
        
        init:function(e){
            var submit = document.getElementById("submit");
            var textarea = document.getElementById("textarea");
            
            submit.onclick = MessageBoard.createMessage;

        },
        
        createMessage: function (e){
            var textarea = document.getElementById("textarea");
            
            MessageBoard.messages.push(new Message(textarea.value, new Date()));
            var toText = textarea.value;
            textarea.placeholder = "Skriv ditt meddelande.";
            // MessageBoard.writeMessage(toText);
            console.log(MessageBoard.messages[0].toString());

            return false; // för att förhindra att sidan defaultladdas om
        },
        
        writeThisMessage: function(){
            
        }
        
        writeMessages: function (message) {
            var div = document.createElement("div");
            var msgSection = document.getElementById("msgSection");
            var p1 = document.createTextNode(message);
            
            div.setAttribute("class", "messageDiv2");
            msgSection.appendChild(div);
            document.getElementById("msgText").innerHTML = p1;
            message.preventDefault();
        },
    
    };

        // var para = document.createElement("p");
        // var node = document.createTextNode("This is new.");
        // para.appendChild(node);
        // var element = document.getElementById("div1");
        // element.appendChild(para);            


window.onload = MessageBoard.init;