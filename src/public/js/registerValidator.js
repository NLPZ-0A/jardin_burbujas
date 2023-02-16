let userReg;
let usernameReg;
let emailReg;
let passwordReg;

//-------------------------------------------------------PARRAFO DE ADVERTENCIA--------------------------------------------------------------------
const warningsRegister = document.querySelector('#warningsRegister');
const submit = document.querySelector('.btn');

submit.addEventListener('click', e =>{

    nameReg = document.querySelector('#name');
    usernameReg = document.querySelector('#username');
    emailReg = document.querySelector('#email');
    passwordReg = document.querySelector('#password');

    const nameRegex = /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+){0,1}(?: [a-zA-ZÀ-ÿ]+){0,1}$/;
    const userRegex = /^[a-z0-9_-]{3,30}$/;
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    
    let warnings = '';
    let submitMessage = false;

    if(!validateString(nameReg.value, nameRegex)){
       // nameReg.style = 'border: solid red';
        warnings += `-El nombre de registro no es valido <br>`;
        submitMessage = true;
    }

    if(!validateString(usernameReg.value, userRegex)){
        //username.style = 'border: solid red';
        warnings += `-El nombre de usuario para el registro no es valido <br>`;
        submitMessage = true;
    }

    if(!validateString(emailReg.value, emailRegex)){
        // emailReg.style = 'border: solid red';
        warnings += `-El email de registro no es valido <br>`;

        submitMessage = true;
    }

    /*if(!validateString(passwordReg.value, passRegex)){
        //passwordReg.style = 'border: solid red';
        warnings += `-La contraseña de registro no es valida <br>`;

        submitMessage = true;
    }*/

    if(passwordReg.value >= 6){
        warnings += `-La contraseña de registro no es valida (debe contener mas de 6 caracteres))`;

        submitMessage = true;
    }

    if(submitMessage){
        warningsRegister.innerHTML = warnings;
        e.preventDefault();
    }

    console.log('evento')

});

const validateString = (str, regex) => {
    // Expresión regular que valida que la cadena no contenga caracteres del tipo asignado
    const specialCharRegex = regex;
    
    // Expresión regular que valida que la cadena no tenga espacios en blanco en los extremos
    const trimRegex = /^\S.*\S$/;
    
    return specialCharRegex.test(str) && trimRegex.test(str);
  }