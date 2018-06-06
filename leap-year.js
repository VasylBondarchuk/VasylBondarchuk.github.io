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


function getDays()
            {
                function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);}				
                
				var output;
				var inputYear = document.getElementById('n1').value;
				
				if (!isNumeric(inputYear) || inputYear < 0 )// перевірка чи є число 
               {alert("Используйте только неотрицательные целые числа!");
               document.getElementById("year").innerHTML = "";}
				else{				
				/*9if (inputYear == "")
			    {  
                 alert("Введите год!");
				 document.getElementById("year").value = "";
				 return; 
                }*/
                if(inputYear % 4 == 0 && inputYear % 100 !=0 && inputYear != 0  ){
				output = 366;}
                else if (inputYear%400==0 && inputYear != 0)
				{output = 366;}
			    else
				{output = 365;}
								
			document.getElementById("year").innerHTML =	"в" + " " + (+(inputYear)) + " " +
			"<span>" + "году" + "</span>" + " " + "=" + output + " " + "<span>" + "дней" + "</span>" ;}}