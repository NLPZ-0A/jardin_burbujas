
let usernameLog;
let passwordLog;
//-------------------------------------------------------PARRAFO DE ADVERTENCIA--------------------------------------------------------------------
const warningsLogin = document.querySelector('#warningsLogin');
const submit = document.querySelector('.btn');


submit.addEventListener('click', e =>{

    usernameLog = document.querySelector('#username');
    passwordLog= document.querySelector('#password');

    const userRegex = /^[a-zA-Z0-9_]+[a-zA-Z0-9_-]{0,15}$/;
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 

    let warnings = '';
    let submitMessage = false;

    if(!validateString(usernameLog.value, userRegex)){
        //username.style = 'border: solid red';
        warnings += `El nombre de usuario pare el registro no es valido <br>solo se permiten 
                        letras (mayúsculas y minúsculas), números, guiones bajos y guiones, y 
                        <br> requiere que el nombre de usuario tenga al menos un carácter y no más de 16 caracteres.`;
        submitMessage = true;
    }
 
    if(!validateString(password.value, passRegex)){
        //passwordReg.style = 'border: solid red';
        warnings += `La contraseña de registro no es valida <br>
                            al menos seis caracteres, <br>
                            y que contenga al menos un dígito, 
                            <br> una letra minúscula y una letra mayúscula.`;

        submitMessage = true;
    }

    if(submitMessage){
        warningsLogin.innerHTML = warnings;
        throw  'error en la validacion del sistema';
    }

    

});



const validateString = (str, regex) => {
    // Expresión regular que valida que la cadena no contenga caracteres del tipo asignado
    const specialCharRegex = regex;
    
    // Expresión regular que valida que la cadena no tenga espacios en blanco en los extremos
    const trimRegex = /^\S.*\S$/;
    
    return specialCharRegex.test(str) && trimRegex.test(str);
  }