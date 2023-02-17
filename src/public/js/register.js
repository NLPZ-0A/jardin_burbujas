let name = document.querySelector('#name');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const sendButton = document.querySelector('.btn');

let warnings = '';

const sendData = (data) => {
    $('#onload').fadeIn();
    warnings = '';

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

        return response.json().then( dataset =>  [response, dataset ]);
    })
    .then(([response, dataset ]) =>{
        console.log(dataset);
        warnings += `${dataset.message}</br>`;
        document.querySelector('#warningsRegister').innerHTML = warnings;
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