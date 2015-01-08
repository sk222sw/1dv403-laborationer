"use strict"

var quiz = {
    questionText: document.getElementById("questionText"),
    
    init: function(){
        quiz.questionText.innerHTML = quiz.getQuestion();
        quiz.writeElements();
        var btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.addEventListener("click", quiz.getUserInput);
    },
    
    writeElements: function() {
        var questionInitialNumber = 1,
            userInput = "";
        
        //gör variabler av dom-ids
        var questionNumber = document.getElementById("questionNumber");
            
        //set attribut
        
        //skriv ut dem
        questionNumber.innerHTML = "Fråga nummer " + questionInitialNumber;
        
    },
    
    getQuestion: function(){
        var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    
                    if (xhr.readyState === 4) {
                        if (xhr.status > 199 && 
                            xhr.status <= 300 ||
                            xhr.status === 304) {
                            
                            var thisQuestion = JSON.parse(xhr.responseText);

                            quiz.questionText.innerHTML = thisQuestion.question;
                        }
                    }
                    
                };
            xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
            xhr.send(null);  
    },
    
    getUserInput: function(){
        var userInputArea = document.getElementById("userInputArea").value;
        console.log(userInputArea);
    },
    
    
    
    
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