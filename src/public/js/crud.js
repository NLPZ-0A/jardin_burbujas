let isFetching = false;

$(document).ready(function() {

    $(document).on('click', '.modal-footer.addContact #sendData', (e) => {
        $('#onload').fadeIn();
        if(!isFetching){
            isFetching = true;
            console.log('enviando...');
            let data = {
                nombre : $('#nombre').val(),
                email : $('#email').val(),
                telefono : $('#telefono').val(),
                asunto : $('#asunto').val(),
                mensaje :$('#mensaje').val()
            }
            console.log(data);
                fetch(`${location.origin}/api/contacts/createContact`,{
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    method : 'POST',
                    body : JSON.stringify(data)
                })
                .then(response =>{
                    $('#onload').fadeOut();
                    if(response.ok ){
                        $('#modalForm').modal('hide');
                        $('#exampleModalCenter').modal('show');
                        $("div.content").load(location.href + " div.content" + ">*","");
                        console.log('datos enviados correctamente!');
                    }
                    isFetching = false;
                    console.log(response);
                })
                .catch(err =>{
                    $('#onload').fadeOut();
                    console.log(err);
                    isFetching = false;
            })

    }
        
    });

   $(document).on('click', '.modal-footer.delete #deleteButtonData', function() {
    $('#onload').fadeIn();
       id= this.dataset.id.toString();
       console.log(id);
        if(!isFetching){
            isFetching = true;
            console.log('borrando...');
            
                fetch(`${location.origin}/api/contacts/deleteContact/${id}`,{
                    method : 'DELETE',
                })
                .then(response =>{
                    $('#onload').fadeOut();
                    if(response.ok ){
                        $(`#modal-${id}`).modal('hide');
                        $('#exampleModalCenter').modal('show');
                        console.log('datos borrados correctamente!');
                    }
                    $(`.modal-backdrop`).remove();
                    $("div.content").load(location.href + " div.content" + ">*","");
                    isFetching = false;
                    console.log(response);
                })
                .catch(err =>{
                    $('#onload').fadeOut();
                    console.log(err);
                    isFetching = false;
            })

        }
        
    });

    $(document).on('click', '.modal-footer.edit #sendDataEdit', function() {
        $('#onload').fadeIn();
        id= this.dataset.id.toString();
        console.log(id);
         if(!isFetching){
             isFetching = true;
             console.log('editando...');
             
             let data = {
                nombre : $(`#nombreEditar${id}`).val(),
                email : $(`#emailEditar${id}`).val(),
                telefono : $(`#telefonoEditar${id}`).val(),
                asunto : $(`#asuntoEditar${id}`).val(),
                mensaje :$(`#mensajeEditar${id}`).val()
            }
            console.log(data);
                fetch(`${location.origin}/api/contacts/updateContact/${id}`,{
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    method : 'PUT',
                    body : JSON.stringify(data)
                })
                .then(response =>{
                    $('#onload').fadeOut();
                    if(response.ok ){
                        $(`#modal-edit-${id}`).modal('hide');
                        $('#exampleModalCenter').modal('show');
                        
                        console.log('datos enviados correctamente!');
                    }
                    $(`.modal-backdrop`).remove();
                    $("div.content").load(location.href + " div.content" + ">*","");
                    isFetching = false;
                    console.log(response);
                })
                .catch(err =>{
                    $('#onload').fadeOut();
                    console.log(err);
                    isFetching = false;
            })
         }
         
     });

   $(document).on('click', '#updateItem', function(){
        location.reload();
   });

  });