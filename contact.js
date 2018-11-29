window.onload = () => {
    contact.addEventListener('submit', handleFormSubmit);
};

function handleFormSubmit(event) {
    // This next line prevents the reload of the form
    event.preventDefault();

    // Remove the feedback from the responses before adding new feedback
    clear_feedback();

    // Create a new text element and add it to the DOM
    let new_text = document.createElement("par");
    new_text.id = "thanks";
    new_text.innerHTML = "Thank you for submitting your question! We will totally review these and not ignore them.";
    document.querySelector("form").insertBefore(new_text, null);

}

function clear_feedback() {
    let element = document.getElementById("thanks");
    while (element !== null) {
        element.parentNode.removeChild(element);
        element = document.getElementById("thanks");
    }
}