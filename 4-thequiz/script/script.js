"use strict"

var quiz = {
    questionText: document.getElementById("questionText"),
    thisQuestion: "http://vhost3.lnu.se:20080/question/1",
    questionNumber: 1,
    tries: 1,
    
    init: function(){
        quiz.thisQuestion = quiz.getQuestion(quiz.thisQuestion);

        var btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.addEventListener("click", quiz.getUserInput);
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
                            
                            quiz.displayQuestion(quiz.thisQuestion);
                            // quiz.questionText.innerHTML = thisQuestion.question;
                        } else {
                            console.log("Felkod: " + xhr.status);
                        }
                    }
                };
            xhr.open("GET", address, true);
            xhr.send(null);  
    },
    
    getUserInput: function(address){
        var userInputArea = document.getElementById("userInputArea");
        var userAnswer = null;

        var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && 
                            xhr.status <= 300 ||
                            xhr.status === 304) {

                            var JSONreturn = JSON.parse(xhr.responseText);
                            
                            if (JSONreturn.hasOwnProperty("nextURL")) {
                                quiz.thisQuestion = JSONreturn.nextURL;
                                quiz.rightOrWrong(JSONreturn.message, true);
                                quiz.getQuestion(JSONreturn.nextURL);
                            } else {
                                quiz.youWin();
                            }
                            
                            quiz.writeTable(quiz.questionNumber, quiz.tries);
                            
                        } else {
                            quiz.tries+=1;
                            quiz.rightOrWrong("Fel svar!", false);
                            console.log("felkod: " + xhr.status);
                        }
                    }
                };
            xhr.open("POST", quiz.thisQuestion.nextURL, true);
			xhr.setRequestHeader("Content-Type", "application/json");
			userAnswer = {"answer": userInputArea.value};
			xhr.send(JSON.stringify(userAnswer)); 
    },

    displayQuestion: function(e){
        quiz.questionText.innerHTML = e.question;
    },
    
    writeTable: function(questionNumber, tries) {
        var table = document.getElementById("table");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        
        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);

        td1.innerHTML = questionNumber;
        td2.innerHTML = tries;
        
        quiz.questionNumber += 1;
        quiz.tries = 1;        
    },
    
    rightOrWrong: function(message, boolValue){
        var input = document.getElementById("userInputArea");
        var main = document.getElementById("quizSection");

        var text = document.getElementById("rightOrWrong");
        text.innerHTML = message;
        input.value = "";
        
        if (!boolValue) {
            input.classList.add("redBackground");
            main.classList.add("mainShake");

            setTimeout(function() {
                
                input.classList.toggle("redBackground");
                main.classList.toggle("mainShake");
                
                    setTimeout(function() {
                        
                        input.classList.toggle("redBackground");
                        main.classList.toggle("mainShake");     
                        
                            setTimeout(function() {
                                
                                input.classList.toggle("redBackground");
                                main.classList.toggle("mainShake");     
                                text.innerHTML = "";
                            }, 100);
                    }, 100);
            }, 100);
        }
    },
    
    youWin: function(){
        document.getElementById("rightOrWrong").innerHTML = "Congrats, you win!";
    }
};
window.onload = quiz.init();