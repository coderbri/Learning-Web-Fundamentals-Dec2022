console.log("Page loaded...");

var username = document.querySelector("#username");
var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");

function editUsername() {
    username.innerText = "Abigail G"
}

function accept( requestId ) {
    var element = document.querySelector(requestId);
    element.remove();
    requestSpan.innerText--;
    // Convert the text content of connectionSpan to a number
    var currentConnections = parseInt(connectionSpan.innerText);
    // Increment the value by 1
    currentConnections++;
    // Update the text content of connectionSpan with the new value
    connectionSpan.innerText = currentConnections;
}

function decline( requestId ) {
    var element = document.querySelector(requestId);
    element.remove();
    requestSpan.innerText--;
}