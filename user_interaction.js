// The JavaScript for all pages (except quiz.html and contact.js)
// Creates a small user interaction wherein if the user hovers over an <img> its border changes

window.onload = () => {

    // Select all images
    let img_list = document.querySelectorAll("img");

    // Store the original CSS properties of each element to easily revert back to them
    let original_properties = [];

    // Add event listeners to every images
    for (let i = 0; i < img_list.length; i++) {
        original_properties += img_list[i].style;

        // mouseover event listener that adds round borders and a solid border line
        img_list[i].addEventListener("mouseover", function () {
            img_list[i].setAttribute("style", "border-radius: 5%;" + "border: 5px solid red");
            img_list[i].style.transition = "all 1s ease";
        });

        // mouseleave event that restores the original properties of the element
        img_list[i].addEventListener("mouseleave", function () {
            img_list[i].style = original_properties[i];
            img_list[i].style.transition = "all 1s ease";
        });
    }
};