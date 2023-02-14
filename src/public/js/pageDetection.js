$(document).ready(function() {

    if(location.href.includes('tables')){
        $('.tables').addClass('active');
    }
    if(location.href.includes('users')){
        $('.user').addClass('active');
    }
    if(location.href.includes('testing')){
        $('.testing').addClass('active');
    }
    if(location.href.includes('dashboard')){
        $('.dashboard').addClass('active');
    }
    if(location.href.includes('home')){
        $('.home').addClass('active');
    }

});