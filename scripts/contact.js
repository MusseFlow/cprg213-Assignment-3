// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.querySelector("#submit-button");
const contactPage = document.querySelector("#contact-page");


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

submitButton.addEventListener("click", function() {
    const thankYouMessage = document.createElement("p");
    thankYouMessage.innerHTML = "Thank you for your message";
    thankYouMessage.style.fontSize = "24px"; // Set the font size
    contactPage.innerHTML = ""; // Clear the form
    contactPage.appendChild(thankYouMessage); // Add the thank you message
});