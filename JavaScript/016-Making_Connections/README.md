# Making Connections

Objective of **Project #016: Making Connections**: is to use `onclick` events and `querySelector` to add like functionality on the website below:

## Web Page Responsiveness

<div align="center">
<img src="./assets/demo-imgs/making-connections-webpage-responsiveness-demo.gif" width="450px" height="auto">
</div>

---

## Making Connections Functionality

1. **`editUsername()`** is called when the "edit profile" link is clicked. It updates the text content of the username element to "Abigail G". Essentially, it changes the displayed username.

2. **`accept(requestId)`** is called when the "accept" button next to a connection request is clicked. It takes the requestId as a parameter, which is the ID of the request card that needs to be accepted. It removes the request card from the DOM using `element.remove()`, decrements the request count displayed in the `requestSpan` element, and increments the connection count displayed in the `connectionSpan` element. It does this by converting the text content of `connectionSpan` to a number using `parseInt`, incrementing it, and then updating the text content with the new value.

3. **`decline(requestId)`** is called when the "decline" button next to a connection request is clicked. It takes the requestId as a parameter, which is the ID of the request card that needs to be declined. It removes the request card from the DOM using `element.remove()` and decrements the request count displayed in the requestSpan element.

<div align="center">
<img src="./assets/demo-imgs/making-connections-js-demo.gif" width="450px" height="auto">
</div>

---

Redone: ２０２３年０９月０６日（水）