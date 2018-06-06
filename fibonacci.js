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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n); // функція перевірки чи об'єкт є числом 
}

function fibon_calc(){
var number = +(document.getElementById('n1').value);//введення значення числа 	

if (!isNumeric(number) || number < 0 )// перевірка чи є число 
{alert("Используйте только неотрицательные целые числа!");
document.getElementById("demo").innerHTML = "";}
	
else{ // алгоритм генерування чисел Фібоначчі
var a = 1,
    b = 1;
if (number == 0){b = 0};

  for (var i = 3; i <= number; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
document.getElementById("demo").innerHTML = "F" + "<sub>" + number + "</sub>" + " " + "=" + " " + b;}}  		

		
				
