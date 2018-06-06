var mySidebar = document.getElementById("mySidebar");
// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");
// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}
// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function calc()
            {
                		
				var inputTemp = Number(document.getElementById('n1').value);//введення значення числа для конвертування
                var inputScale = document.getElementById('operators1').value;//введення системи числення числа для конвертування
				var outputScale = document.getElementById('operators2').value;//введення системичислення конвертованого чесла
              	var outputTemp = 0; // результат конвертації
				var scaleNameOutput1; var scaleNameOutput2; 
				
				if (isNaN(inputTemp) || inputTemp == "" )
			    {alert("Используйте только цифры и символ . для ввода температуры!");
			    document.getElementById("demo").innerHTML = "";}
				else{				
				if (inputScale == 1 && (inputScale - outputScale == 0) )
				{scaleNameOutput1 = "C";scaleNameOutput2 = "C"; }
			    if (inputScale == 2 && (inputScale - outputScale == 0) )
				{scaleNameOutput1 = "F";scaleNameOutput2 = "F"; }
			    if (inputScale - outputScale < 0)
				{scaleNameOutput1 = "C";scaleNameOutput2 = "F"; }
			    if (inputScale - outputScale > 0 )
				{scaleNameOutput1 = "F";scaleNameOutput2 = "C"; }
				
				if (inputScale - outputScale < 0 )
			    {  
                 outputTemp = (9/5)* inputTemp + 32;
				}
				else if (inputScale - outputScale > 0 )
			    {  
                 outputTemp = (5/9)* (inputTemp - 32);
				}
                if (inputScale - outputScale == 0 )
			    {  
                 outputTemp = inputTemp;
				}
													
				document.getElementById("demo").innerHTML = inputTemp + "<sub>" + scaleNameOutput1
			+ "</sub>" + " " + "=" + " " +  round(outputTemp,2) + "<sub>" + scaleNameOutput2 + "</sub>";}}