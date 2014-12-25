"use strict";

    var MessageBoard = {
        messages: [],


        submit: document.getElementById("submit"),
        textarea: document.getElementById("textarea"),
        messageDiv: document.getElementById("msgSection"),
        
        
        
        init:function(){
            document.getElementById("submit").onclick = MessageBoard.createMessage;
            // console.log((new Date()).toISOString().slice(0,10).replace(/-/g," "));
            
                MessageBoard.textarea.keypress = function(event) {
                        if (event.keyCode == 13 && event.shiftKey) {
                         return false;
                         }
                         else {
                         MessageBoard.writeMessages();                           
                         }
                };
        },
        
        createMessage: function (e){
            if (MessageBoard.textarea.value !== "") {
                MessageBoard.messages.push(new Message(MessageBoard.textarea.value, new Date()));
                MessageBoard.writeMessages(MessageBoard.messages);
            }
            else {
                MessageBoard.textarea.placeholder = "Var god skriv ett meddelande.";
            }
            return false; // för att förhindra att sidan defaultladdas om
        },
        
        writeThisMessage: function(thisMess){
            var div = document.createElement("div");
            var mess = document.getElementById("mainsection");
            var pTime = document.createElement("p");
            var deleteButton = document.createElement("div");
            var timeButton = document.createElement("div");
            var buttonDiv = document.createElement("div");
            var link = document.createElement("a");
            
            buttonDiv.setAttribute("class", "buttonDiv")
            timeButton.setAttribute("id", "timeButton");
            deleteButton.setAttribute("id", "deleteButton");
            
            var messageDiv = document.getElementById("msgSection");
            
            pTime.className = "smallText";
            div.className = "messageDiv";
            
            //hittat på http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
            var timeString = MessageBoard.messages[thisMess].getDate().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");  
            
            div.innerHTML = MessageBoard.messages[thisMess].getText();
            pTime.innerHTML = timeString;
            
                messageDiv.appendChild(div);
                link.appendChild(buttonDiv);
                buttonDiv.appendChild(deleteButton);
                buttonDiv.appendChild(timeButton);
                buttonDiv.appendChild(pTime);
                div.appendChild(link);
                
                MessageBoard.textarea.placeholder = "Skriv här";
                MessageBoard.textarea.value = "";   //Tar bort den inskrivna texten från textarea

            
            deleteButton.onclick = function(){
                if(confirm("Vill du ta bort?")) {
                    MessageBoard.deleteMessage(thisMess); 
                }
            };
            
            timeButton.onclick = function(){
                alert(MessageBoard.messages[thisMess].toString());
                return false;
            }

        },
        
        writeMessages: function (message) {

            MessageBoard.messageDiv.innerHTML = "";  //Raderar alla meddelanden innan loopen skriver ut dem igen
            for (var i = 0; i < MessageBoard.messages.length; i++) {
                MessageBoard.writeThisMessage(i);
            }
                var count = MessageBoard.messageCounter();  
                
                var messages = document.getElementById("messageCount");
                messages.innerHTML = "Antal meddelanden: " + count;
                return false;

            
        },
        
        messageCounter: function(e) {
            return MessageBoard.messages.length;
        },
        
        deleteMessage: function(thisMess){
            MessageBoard.messages.splice(thisMess, 1);
            MessageBoard.writeMessages();
            return false;
        }
        

    
    };



window.onload = MessageBoard.init;