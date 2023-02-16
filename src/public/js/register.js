let name = document.querySelector('#name');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const sendButton = document.querySelector('.btn');

const sendData = (data) => {
    $('#onload').fadeIn();
    fetch(`${location.origin}/admin/register`, {
        credentials : 'same-origin',
        headers     : { 

            'content-type':'application/json',
        },

        method : 'POST',
        body   : JSON.stringify(data)
    })
    .then(response =>{
        $('#onload').fadeOut();
        if(response.ok){
            location.replace('/admin/login')
        }
        console.log(response);
    })
    .then(dataset =>{
        console.log(dataset);
        document.querySelector('#warningsRegister').innerHTML += dataset.message;
    })
    .catch(error =>{
        $('#onload').fadeOut();
        console.log(error);
        throw error;
    });
};


sendButton.addEventListener('click', () => {
    data = {
        name : name.value,
        username : username.value,
        email : email.value,
        password : password.value
    }
    console.log(JSON.stringify(data));
    sendData(data);
});