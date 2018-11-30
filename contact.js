window.onload = () => {
    contact.addEventListener('submit', handleFormSubmit);

    // Select all images
    let img_list = document.querySelectorAll("img");

    // Store the original CSS properties of each element to easily revert back to them
    let original_properties = [];

    // Add event listeners to every images
    for (let i = 0; i < img_list.length; i++) {
        original_properties += img_list[i].style;

        img_list[i].addEventListener("mouseover", function () {
            img_list[i].setAttribute("style", "border-radius: 5%;" + "border: 5px solid red");
            img_list[i].style.transition = "all 1s ease";
        });

        img_list[i].addEventListener("mouseleave", function () {
            img_list[i].style = original_properties[i];
            img_list[i].style.transition = "all 1s ease";
        });
    }
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