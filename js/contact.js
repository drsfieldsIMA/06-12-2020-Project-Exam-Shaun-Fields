const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

            if (checkInputLength(firstNameValue, 0) === true) {
                firstNameError.style.display = "none";
            } else {
                firstNameError.style.display = "block";
                firstNameError.textContent ="Your input was not greater than 0 characters";

            }
    
    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

            if (checkInputLength(lastNameValue, 0) === true) {
                lastNameError.style.display = "none";
            } else {
                lastNameError.style.display = "block";
                lastNameError.textContent ="Your input was not greater than 0 characters";
            }
    
            const messageText= document.querySelector("#message");
            const messageError = document.querySelector("#messageError");
            const messageValue = messageText.value;
        
            if (checkInputLength(messageValue, 9) === true) {
                        messageError.style.display = "none";
            } else {
                        messageError.style.display = "block";
                        messageError.textContent ="Your input was not the required 10 characters";
            }
            
            const emailText= document.querySelector("#email");
            const emailError = document.querySelector("#emailError");
            const emailValue = emailText.value;
                
                            if (myfindFunction(emailValue) === true) {
                                emailError.style.display = "none";
                            } else {
                                emailError.style.display = "block";
                                emailError.textContent ="Your email is not valid it does not have a @";
                            }
}

function checkInputLength(value, tol) {
    // trim the value
    const trimmedValue = value.trim();

            // if the value's length is greater than 0 return true
            if (trimmedValue.length > tol) {
             //   console.log("Your input was greater than 0 characters")
                return true;
            } else {
            //    console.log("Your input was not greater than 0 characters")
                return false;
            }
}

function myfindFunction(Address) {
    var n = Address.indexOf("@", 1);
    if (n > 0) {
        console.log("Your email is valid")
        return true;
    } else {
        console.log("Your email is not valid it does not have a @")
        return false;
    }
  }