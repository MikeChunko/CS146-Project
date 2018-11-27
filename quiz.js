window.onload = () => {
    // Once our window is loaded, we add the event listener for our post form
    quiz.addEventListener('submit', handleFormSubmit);
};

/**
 * This function gets the arrays corresponding to the radio buttons for each question on the quiz
 * This then iterates through the arrays and sends the checked response to the its corresponding function
 * @param event
 */
function handleFormSubmit(event) {
    // This next line prevents the reload of the form
    event.preventDefault();

    // Remove the feedback from the responses before adding new feedback
    clear_feedback();

    // This gets the array containing the radio buttons for each question
    let q1 = document.getElementsByName("meal_prep_1");
    let q2 = document.getElementsByName("meal_prep_2");
    let q3 = document.getElementsByName("food_guide_1");
    let q4 = document.getElementsByName("food_guide_2");
    let correct_count = 0;
    let total_count = 4;

    // This iterates through each array, sending the checked response to the corresponding function
    for (let i = 0; i < q1.length; i++) {
        if (q1[i].checked === true) {
            // The correct response is the 3rd button, "Bread, Cereal, Rice & Pasta"
            if (i === 2) {
                correct_count++;
                correct_response(q1[i])
            } else
                wrong_response(q1[i])
        }
    }

    for (let i = 0; i < q2.length; i++) {
        if (q2[i].checked === true) {
            // The correct response is the 2nd button, "The Stevens' dietitian"
            if (i === 1) {
                correct_count++;
                correct_response(q2[i])
            } else
                wrong_response(q2[i])
        }
    }

    for (let i = 0; i < q3.length; i++) {
        if (q3[i].checked === true) {
            // The correct response is the 1sd button, "Free food from certain restaurants in exchange for a meal swipe"
            if (i === 0) {
                correct_count++;
                correct_response(q3[i])
            } else
                wrong_response(q3[i])
        }
    }

    for (let i = 0; i < q4.length; i++) {
        if (q4[i].checked === true) {
            // The correct response is the 4th button, "All of the above"
            if (i === 3) {
                correct_count++;
                correct_response(q4[i])
            } else
                wrong_response(q4[i])
        }
    }

    feedback(correct_count, total_count);
}

/**
 * Appends a <par> with the id "correct" and contents "✔ This answer is correct" to the end of the question area
 * @param input
 */
function correct_response(input) {
    let new_text = document.createElement("par");
    new_text.id = "correct";
    new_text.innerText = "✔ This answer is correct";
    input.parentNode.parentNode.append(new_text);
}

/**
 * Appends a <par> with the id "wrong" and contents "✘ This answer is incorrect" to the end of the question area
 * @param input
 */
function wrong_response(input) {
    let new_text = document.createElement("par");
    new_text.id = "wrong";
    new_text.innerText = "✘ This answer is incorrect";
    input.parentNode.parentNode.append(new_text);
}

/**
 * Removes the messages stating whether a response is right or wrong as well as the message about the number of
 * correct responses
 */
function clear_feedback() {
    let element = document.getElementById("wrong");
    while (element !== null) {
        element.parentNode.removeChild(element);
        element = document.getElementById("wrong");
    }

    element = document.getElementById("correct");
    while (element !== null) {
        element.parentNode.removeChild(element);
        element = document.getElementById("correct");
    }

    element = document.getElementById("feedback");
    while (element !== null) {
        element.parentNode.removeChild(element);
        element = document.getElementById("feedback");
    }
}

function feedback(correct, total) {
    let new_text = document.createElement("par");
    new_text.id = "feedback";
    new_text.innerHTML = "You got " + correct + " out of " + total + " questions right. ";

    let percentage = correct / total;

    if (percentage <= .25)
        new_text.innerHTML += "You really need to work on your skills.";
    else {
        if (percentage <= .5)
            new_text.innerHTML += "You certainly have room to improve.";
        else {
            if (percentage <= .75)
                new_text.innerHTML += "Not too shabby.";
            else {
                if (percentage < 1)
                    new_text.innerHTML += "You're pretty good at this.";
                else
                    new_text.innerHTML += "You're an expert!";
            }
        }
    }

    document.querySelector("form table").insertBefore(new_text, null);
}
