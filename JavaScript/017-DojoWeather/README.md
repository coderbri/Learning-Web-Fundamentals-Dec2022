# DojoWeather

Objectives of **Project #017: DojoWeather**: are to recreate a weather forecast page using HTML and CSS, use the CSS property `position: fixed;` to position the cookie policy at the bottom of the page, and add the following JavaScript features when the user interacts with buttons and links:


## Web Page Responsiveness
<div align="center">
<img src="./assets/demo/DojoWeather-Responsiveness-Demo.gif" width="450px" height="auto">
</div>

---

## Weather Forecast Functionality

<div align="center">
<img src="./assets/demo/DojoWeather-Features.gif" width="450px" height="auto">
</div>

1. **`accept()`**: Removes a cookie policy popup from the screen when accepted by the user.

2. **`celsiusToFahrenheit(temp)`**: Converts a temperature from Celsius to Fahrenheit and rounds it to the nearest whole number.

3. **`fahrenheitToCelsius(temp)`**: Converts a temperature from Fahrenheit to Celsius and rounds it to the nearest whole number.

4. **`convertTemperatures(element)`**: Converts temperature values displayed on the web page between Celsius and Fahrenheit based on user-selected units. It updates the displayed temperatures accordingly.

---

<!-- 

1. **`editUsername()`** is called when the "edit profile" link is clicked. It updates the text content of the username element to "Abigail G". Essentially, it changes the displayed username.

2. **`accept(requestId)`** is called when the "accept" button next to a connection request is clicked. It takes the requestId as a parameter, which is the ID of the request card that needs to be accepted. It removes the request card from the DOM using `element.remove()`, decrements the request count displayed in the `requestSpan` element, and increments the connection count displayed in the `connectionSpan` element. It does this by converting the text content of `connectionSpan` to a number using `parseInt`, incrementing it, and then updating the text content with the new value.

3. **`decline(requestId)`** is called when the "decline" button next to a connection request is clicked. It takes the requestId as a parameter, which is the ID of the request card that needs to be declined. It removes the request card from the DOM using `element.remove()` and decrements the request count displayed in the requestSpan element.


---

-->
Redone: ２０２３年０９月１３日（水）