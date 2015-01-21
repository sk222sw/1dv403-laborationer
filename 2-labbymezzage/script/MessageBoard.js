"use strict";

    var MessageBoard = {
        messages: [],


        submit: document.getElementById("submit"),
        textarea: document.getElementById("textarea"),
        messageDiv: document.getElementById("msgSection"),
        
        
        
        init:function(){

        		MessageBoard.textarea.addEventListener("keypress", function(e){
                    
        			if(e.keyCode == 13 && !e.shiftKey){
        				e.preventDefault();
        				MessageBoard.writeMessages();
        			}

        		});                

            document.getElementById("submit").onclick = MessageBoard.createMessage;

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
            // var deleteButton = document.createElement("div");
            // var timeButton = document.createElement("div");
            
            var div = document.createElement("div");
            var mess = document.getElementById("mainsection");
            var pTime = document.createElement("p");
            var buttonDiv = document.createElement("div");
            var deleteA = document.createElement("a");
            var timeA = document.createElement("a");
            
            buttonDiv.setAttribute("class", "buttonDiv");
            deleteA.setAttribute("id", "deleteButton");
            deleteA.setAttribute("href", "#");
            timeA.setAttribute("id", "timeButton");
            timeA.setAttribute("href", "#");
            timeA.setAttribute("tabindex", "3"); //för att få tab-index i rätt ordning.
            
            var messageDiv = document.getElementById("msgSection");
            
            pTime.className = "smallText";
            div.className = "messageDiv";
            
            //hittat på http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
            var timeString = MessageBoard.messages[thisMess].getDate().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");  
            
            div.innerHTML = MessageBoard.messages[thisMess].getText();
            pTime.innerHTML = timeString;
                
            messageDiv.appendChild(div);
            div.appendChild(buttonDiv);
            buttonDiv.appendChild(deleteA);
            buttonDiv.appendChild(timeA);
            buttonDiv.appendChild(pTime);
                
                MessageBoard.textarea.placeholder = "Skriv här";
                MessageBoard.textarea.value = "";   //Tar bort den inskrivna texten från textarea

            deleteA.onclick = function(){
                if(confirm("Vill du ta bort?")) {
                    MessageBoard.deleteMessage(thisMess); 
                }
            };
            
            timeA.onclick = function(){
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