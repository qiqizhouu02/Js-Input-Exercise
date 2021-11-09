document.getElementById(`Submit`).addEventListener(`click`, e => {
    checkValid()
    console.log("hi")
});

function checkValid() {
    const firstname = document.getElementById(`fname`)
    const lastname = document.getElementById(`lname`)
    const agreement = document.getElementById(`agreement`)
    const email = document.getElementById('email')
    console.log(agreement)
    if (firstname.value !== '' && lastname.value !== '' && agreement.checked == true && ValidateEmail(email) == true) {
        setTimeout(function() { alert("Thanks for signing up"); }, 3000);
    } else {
        firstname.classList.add("invalid")
        if (firstname.value == '') {
            firstname.classList.add("invalid")
        }
        if (lastname.value == '') {
            lastname.classList.add("invalid")
        }
        if (agreement.checked == false) {
            agreement.classList.add("invalid")
            console.log("invalid")
        }
        if (ValidateEmail(email) == false) {
            email.classList.add("invalid")
        }
    }

}

function ValidateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.value);
    console.log("help")
}