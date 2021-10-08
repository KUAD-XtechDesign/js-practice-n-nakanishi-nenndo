var inputKey = [];  
var konamiCommand = [38,38,40,40,37,39,37,39,66,65]; 
document.onkeydown = function(e){ 
    inputCommand.push(e.keyCode);     
    var inputCommandLen=inputCommand.length;     
    var inputCode=inputCommand[inputCommandLen-1]      
    var commandCode=kakushiCommand[inputCommand-1];      
    if(inputCommandLen ===kakushiCommand.length){          
      window.alert("横取り40万")         
      inputCommand.length=0;    
    }     
    else {
     inputCommand.length=0;
    }
}