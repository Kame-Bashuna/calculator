function appendToDisplay(value){
    if(currentDisplay === "0"){
        
    }
    else{
        currentDisplay+=value
    }
    resultDisplay=false;
    updateDisplay()
}

function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
  }

  function calculateResult(){
    try{
        const result=eval(currentDisplay)
        currentDisplay +="\n="+result.toString()
        updateDisplay()
    }
    catch(error){
         currentDisplay+="\nError"
         updateDisplay()
    }
    resultDisplay=true
  }

  function clearDisplay(){
    currentDisplay="0"
    resultDisplay=false
    updateDisplay()

  }