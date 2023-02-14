let email = document.querySelector('')

const sendData = (data)=>{
fetch(`${location.origin}/sendForm`,{
    method : 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(data)
    }).then(response => {
    if(response.ok){
        
    }
    console.log(response);
}).catch(err => {
    console(err)
})

}


sendButton.addEvententListener('click', () => {
    data = {
        email : email.value
    }

    sendData(data)

})