const email = document.getElementById('email');
const small = document.getElementById('error-small');

handlesubmit = event => {
    event.preventDefault();
    const input = email.value;
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!input.match(emailRegex)) {
        email.style.border = "2px solid hsl(354, 100%, 66%)";
        small.classList.add("d-block") 
    } else {
        small.classList.remove("d-block");
    }
}