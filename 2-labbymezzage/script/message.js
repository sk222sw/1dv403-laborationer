"use strict";

function Message (message, date) {
    
    this.getText = function() {
        return message;
    },
    
    this.setText = function(_text) {
        message = _text;
    };
    
    this.getDate = function() {
        return date;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
    
}

Message.prototype.toString = function() {
    var date = this.getDate();
    
    var monthNames = [ "januari", "februari", "mars", "april", "maj", "juni",
        "juli", "augusti", "september", "oktober", "november", "december" ];
    
    var day = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    
    var time = this.getDate().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    
    return "Meddelandet skapades den " + day + " " + month + " " + year + " klockan " + time + ".";
};

Message.prototype.getHTMLText = function() {
    return Message.getText;
};

Message.prototype.getDateText = function() {
    return Message.getDate;
};

