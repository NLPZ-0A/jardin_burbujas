let name = document.querySelector('#name');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const sendButton = document.querySelector('.btn');

const sendData = (data) => {
    
    fetch(`${location.origin}/admin/register`, {
        credentials : 'same-origin',
        headers     : { 

            'content-type':'application/json',
        },

        method : 'POST',
        body   : JSON.stringify(data)
    })
    .then(response =>{
        if(response.ok){
            location.replace('/admin/login')
        }
        console.log(response);
    })
    .catch(error =>{
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