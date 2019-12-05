const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

form.addEventListener('submit', e=> {
    e.preventDefault();
    checkInputs();
})

const checkInputs= ()=> {
    // trim to remove the whitespaces
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email')
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank')
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match')
    } else {
        setSuccessFor(password2)
    }
}

const setErrorFor = (input, message)=> {
    let formControl = input.parentElement
    console.log(formControl);
    
    let small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message
}

const setSuccessFor = (input)=> {
    let formControl = input.parentElement
    formControl.className = 'form-control success'
}

const isEmail = email=> {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
