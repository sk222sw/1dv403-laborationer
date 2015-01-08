window.onload = function() {
    
    document.getElementById("btnSubmit").addEventListener("click", function(){
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && 
                    xhr.status <= 300 ||
                    xhr.status === 304) {
                    
                    console.log(xhr.responseText);
                    var pers = JSON.parse(xhr.responseText);
                    
                    
                }
            }
            
        }
        
        xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
        
        xhr.send(null);
    });
    
}