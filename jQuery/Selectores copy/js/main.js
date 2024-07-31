// Codigo jQuery

$(document).ready(function(){  //Esto sirve para cargar los elementos 

    $("#burger").click(function(){
        $("#burger").toggleClass("open");
        $(".menu").toggleClass("open");
    })
})