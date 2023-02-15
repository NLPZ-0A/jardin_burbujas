let isFetching = false;

$(document).ready(function() {

    console.log('funcionando');
   
    $(document).on('click', ".test-container .form-container .form-group #sendDataButton", (e) => {
        e.preventDefault();
        if(!isFetching){
            $('#onload').fadeIn();
            isFetching = true;
            console.log('enviando...');
            let dataSend = {
                nombre : $('#nombre').val(),
                email : $('#email').val(),
                telefono : $('#telefono').val(),
                asunto : $('#asunto').val(),
                mensaje :$('#mensaje').val()
            }
            console.log(dataSend);
                fetch(`${location.origin}/api/contacts/createContact`,{
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    method : 'POST',
                    body : JSON.stringify(dataSend)
                })
                .then(response =>{ 
                    $('#onload').fadeOut();
                    isFetching = false;
                    return response.json().then(data => [response, data]);
                })
                .then(([response, data])=>{

                    let responseMessage = `type request : ${response.type} </br>
                     Status : ${response.status}</br>
                     StateOfRequest : ${response.ok} </br>
                     Mensaje del servidor: ${data.message}`
                     
                     console.log(response);

                     $('.inputData').html(JSON.stringify(dataSend));
                     $('.outputData').html(responseMessage);

                })
                .catch(err =>{
                    $('#onload').fadeOut();
                  
                    $('.inputData').html(`El input enviado fue:</br> ${JSON.stringify(data)}`);
                    $('.outputData').html(`se ha producido un error del lado del cliente al enviar la solicitud /  ${err}}`);
                    
                    console.log(err);
                    isFetching = false;
            })

        }
        
    });

    $(document).on('click', ".test-container .form-container .form-group #cleanData", (e) => {
        e.preventDefault()
        $(".form-container")[0].reset();
    });

});