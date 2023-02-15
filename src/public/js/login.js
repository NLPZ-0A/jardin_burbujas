let username = document.querySelector('#username');
let password = document.querySelector('#password');

const sendButton = document.querySelector('.btn');


const sendData = (data) => {
    $('#onload').fadeIn();

    fetch(`${location.origin}/admin/login`, {
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
            location.replace('/admin/home')
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
        username : username.value,
        password : password.value
    }
    console.log(JSON.stringify(data));
    sendData(data);
})