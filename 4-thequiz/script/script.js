"use strict"

var quiz = {
    questionText: document.getElementById("questionText"),
    thisQuestion: null,
    questionNumber: 1,
    questionAddress: "http://vhost3.lnu.se:20080/question/",
    
    init: function(){
        var questionAddress = "http://vhost3.lnu.se:20080/question/";
        
        quiz.thisQuestion = quiz.getQuestion(questionAddress + 1);

        quiz.writeElements();
        var btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.addEventListener("click", quiz.getUserInput);
    },
    
    writeElements: function() {
        //skapa dom-element
        
        //gör variabler av dom-ids
        var questionNumber = document.getElementById("questionNumber");
            
        //set attribut
        
        //skriv ut dem
        questionNumber.innerHTML = "Fråga: " + quiz.questionNumber;
        
    },
    
    getQuestion: function(address){
        var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && 
                            xhr.status <= 300 ||
                            xhr.status === 304) {
                            
                            var JSONreturn = xhr.responseText;
                            quiz.thisQuestion = JSON.parse(JSONreturn);

                            console.log(quiz.thisQuestion);
                            quiz.displayQuestion(quiz.thisQuestion);
                            // quiz.questionText.innerHTML = thisQuestion.question;
                        }
                    }
                    
                };
            xhr.open("GET", address, true);
            xhr.send(null);  
    },
    
    getUserInput: function(){
        var userInputArea = document.getElementById("userInputArea");
        var userAnswer = null;

        var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && 
                            xhr.status <= 300 ||
                            xhr.status === 304) {

                            console.log(xhr.responseText);
                            var JSONreturn = JSON.parse(xhr.responseText);
                            
                            quiz.rightOrWrong(JSONreturn.message);
                            
                            quiz.getQuestion(JSONreturn.nextURL);

                        } else {
                            quiz.rightOrWrong("Fel svar!");
                            console.log("felkod: " + xhr.status);
                        }
                    }
                    
                };

            xhr.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			userAnswer = {"answer": userInputArea.value}
			xhr.send(JSON.stringify(userAnswer)); 
            
        console.log(userAnswer);
    },

    displayQuestion: function(e){
        console.log(e);
        quiz.questionText.innerHTML = e.question;
    },
    
    rightOrWrong: function(message){
        document.getElementById("rightOrWrong").innerHTML = message;
    }
    
    
    
    
};

window.onload = quiz.init();

// window.onload = function() {
    
//     document.getElementById("btnSubmit").addEventListener("click", function(){
//         var xhr = new XMLHttpRequest();
        
//         xhr.onreadystatechange = function() {
            
//             if (xhr.readyState === 4) {
//                 if (xhr.status >= 200 && 
//                     xhr.status <= 300 ||
//                     xhr.status === 304) {
                    
//                     var pers = JSON.parse(xhr.responseText);
                    
//                     console.log(pers.question);
//                 }
//             }
//         };
//         xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
//         xhr.send(null);
//     });
    
// };