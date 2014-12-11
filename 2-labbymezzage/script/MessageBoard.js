"use strict";

    var MessageBoard = {
        messages: [],
        submit: document.getElementById("submit"),
        textarea: document.getElementById("textarea"),
        messageDiv: document.getElementById("msgSection"),
        
        init:function(e){
            document.getElementById("submit").onclick = MessageBoard.createMessage;

        },
        
        createMessage: function (e){
            MessageBoard.messages.push(new Message(MessageBoard.textarea.value, new Date()));
            MessageBoard.writeMessages(MessageBoard.messages);
            // console.log(MessageBoard.messages.toString());
            return false; // för att förhindra att sidan defaultladdas om
        },
        
        writeThisMessage: function(thisMess){
            var div = document.createElement("div");
            var deleteButton = document.createElement("input");
            var messageDiv = document.getElementById("msgSection");
            var mess = document.getElementById("mainsection");

            deleteButton.setAttribute("type", "submit");
            deleteButton.setAttribute("value", "delete");
            console.log(MessageBoard.messages[thisMess].toString());
            
            div.className = "messageDiv";
            
            div.innerHTML = "hej";
            messageDiv.appendChild(div);

            // div.className = "messageDiv2";
            // div.innerHTML = MessageBoard.messages[thisMess].toString();
            // MessageBoard.messageDiv.appendChild(div);
        },
        

        
        writeMessages: function (message) {
            // MessageBoard.textarea.placeholder = "Skriv här";
            // MessageBoard.textarea.value = "";   //Tar bort den inskrivna texten från textarea

            // MessageBoard.messageDiv.innerHTML = "";  //Raderar alla meddelanden innan loopen skriver ut dem igen

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