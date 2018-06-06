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


function calc()
            {
                var symbols = "0123456789ABCDEF";//символи систем числення				
				var inputNumber = document.getElementById('n1').value;//введення значення числа для конвертування
                var inputSystem = document.getElementById('operators1').value;//введення системи числення числа для конвертування
				var outputSystem = document.getElementById('operators2').value;//введення системичислення конвертованого чесла
              	var outputNumber10 = 0;//проміжне десяткове число
				var outputNumberArray = [];//проміжний масив для переведення з десяткової у бажану систему числення
				var arr = inputNumber.toUpperCase().split("");//массив з символів введеного числа
                var count = 0;// допоміжна змінна
				var outputNumber = 0; // результат конвертації
				 
				
				/* Перевірка на коректність введених симолів*/
				
				var i;	// допоміжна змінна					
				for (i = 0; i < arr.length; i++) {
                if (!symbols.substr(0,inputSystem).includes(arr[i], -1))
			    {  
                 alert("Некорректные символы для этой системы! Разрешены только символы" + " "
				 + " " + symbols.substr(0,inputSystem).split(""));
				 document.getElementById('result').value = "No answer";
				 return; }
				}	
				/* Перевірка на непорожній рядок*/
				
				if (inputNumber == "")
			    {  
                 alert("Введите число!");
				 document.getElementById('result').value = "";
				 return; 
                }
				
				/* Перевірка на непорожній рядок*/
				
				
				for (i = 0; i < arr.length; i++) {
                if (inputSystem <= 10 || (inputSystem > 10 && !isNaN(arr[i])))
			    {  
                 outputNumber10 = outputNumber10 + (arr[i])* Math.pow(inputSystem,(arr.length)-i-1);
				} 
				else if (inputSystem > 10 && symbols.substr(10,6).includes(arr[i])) 
				{
                 outputNumber10 += (symbols.substr(10,6).indexOf(arr[i])+ 10 )* Math.pow(inputSystem,(arr.length)-i-1);}    
				}
				
				if (outputNumber10 <= 9 && outputNumber10 < outputSystem){ 
                outputNumber = outputNumber10;
				}
								
	            if (outputNumber10 <= 9 && outputNumber10 >= outputSystem)
				{
				while(Math.floor(outputNumber10/outputSystem**count) != 0){
                outputNumberArray.push(Math.floor(outputNumber10/outputSystem**count)% outputSystem);
                count = count + 1;
				}
				outputNumber = outputNumberArray.reverse().join("");}
	            if (outputNumber10 > 9 && outputNumber10 >=  outputSystem){
				while(Math.floor(outputNumber10/outputSystem**count) != 0){
				if (Math.floor(outputNumber10/outputSystem**count)% outputSystem <= 9){
				outputNumberArray.push(Math.floor(outputNumber10/outputSystem**count)% outputSystem);}
                else if (Math.floor(outputNumber10/outputSystem**count)% outputSystem > 9){
				outputNumberArray.push(symbols.substr(10,6).substr((Math.floor(outputNumber10/outputSystem**count)%
				outputSystem)-10,1));}
				count = count + 1;}
				outputNumber = outputNumberArray.reverse().join("");
				}
	            
	            if (outputNumber10 > 9 && outputNumber10 < outputSystem)
				{outputNumber = symbols.substr(10,6).substr(outputNumber10 - 10,1);}					
				document.getElementById("demo").innerHTML = inputNumber + "<sub>" + inputSystem + "</sub>" + " " + "=" + " " +  outputNumber + "<sub>" + outputSystem + "</sup>";}