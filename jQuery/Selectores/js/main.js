// Codigo jQuery

$(document).ready(function(){  //Esto sirve para cargar los elementos 
    $("#vg").hide(3000); // Selector mediante id.

    //Selector mediante clase
    $(".escritores").css("font-size","24px");

    //Selector mediante clase y posicion
    $(".escritores:eq(3)").css("color", "violet");

    //Selector mediante una combinaciones de selectores
    $("#directores li").addClass("cine");
})