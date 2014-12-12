"use strict";

    var MessageBoard = {
        messages: [],


        submit: document.getElementById("submit"),
        textarea: document.getElementById("textarea"),
        messageDiv: document.getElementById("msgSection"),
        
        init:function(e){
            document.getElementById("submit").onclick = MessageBoard.createMessage;
            console.log((new Date()).toISOString().slice(0,10).replace(/-/g," "));
        },
        
        createMessage: function (e){
            MessageBoard.messages.push(new Message(MessageBoard.textarea.value, new Date()));
            MessageBoard.writeMessages(MessageBoard.messages);
            // console.log(MessageBoard.messages.toString());
            return false; // för att förhindra att sidan defaultladdas om
        },
        
        writeThisMessage: function(thisMess){
            var div = document.createElement("div");
            var mess = document.getElementById("mainsection");
            var pTime = document.createElement("p");
            var deleteButton = document.createElement("div");
            var timeButton = document.createElement("div");
            
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
            div.appendChild(deleteButton);
            div.appendChild(timeButton);
            div.appendChild(pTime);
            
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
            MessageBoard.textarea.placeholder = "Skriv här";
            MessageBoard.textarea.value = "";   //Tar bort den inskrivna texten från textarea

            MessageBoard.messageDiv.innerHTML = "";  //Raderar alla meddelanden innan loopen skriver ut dem igen

            for (var i = 0; i < MessageBoard.messages.length; i++) {
                MessageBoard.writeThisMessage(i);
            }
            
        },
        
        deleteMessage: function(thisMess){
            MessageBoard.messages.splice(thisMess, 1);
            MessageBoard.writeMessages();
            return false;
        }
        

    
    };



window.onload = MessageBoard.init;