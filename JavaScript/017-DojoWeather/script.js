console.log("Page loaded...");

var cookieDiv = document.querySelector("#cookie__popup");

function loading() {
    alert("Loading weather report...");
}

function accept() {
    cookieDiv.remove();
}

function celsiusToFarenheit(temp) {
    return Math.round(9 / 5 * temp + 32); // Math.round() rounds to nearest whole num
}
function farenheitToCelsius(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convertTemperatures(element) {
    console.log(element.value);
    for( var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i); // access the HTML inner text
        var tempVal = parseInt(tempSpan.innerText); // converts string into num
        // console.log("Current Temperature:", tempVal); // log whatever is present
        
        //? Check if temp is in ˚C:
        if( element.value == "˚C" ) { //? Convert current temp from ˚C => ˚F
            // console.log("Converted Temperature:", celsiusToFarenheit(tempVal)); // log whatever is present
            tempSpan.innerText = farenheitToCelsius(tempVal);
        }
        else { //? Convert current temp from ˚F => ˚C
            tempSpan.innerText = celsiusToFarenheit(tempVal);
            // console.log("Converted Temperature:", farenheitToCelsius(tempVal)); // log whatever is present
        }
    }
}
