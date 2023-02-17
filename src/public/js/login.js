let username = document.querySelector('#username');
let password = document.querySelector('#password');
const warningP = document.querySelector('#warningsLogin');
let warnings  = '';

const sendButton = document.querySelector('.btn');


const sendData = (data) => {
    $('#onload').fadeIn();
    warnings = '';

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
        console.log(response)
        if(response.ok){
            location.replace('/admin/home')
        }
        return response.json().then( dataset =>  [response, dataset ]);
    })
    .then(([ response, dataSet]) => {
        console.log(dataSet.message);
        warnings += `${dataSet.message}</br>`;

        if(warnings){
            warningP.innerHTML = warnings
         }
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