$( document ).ready(function() {

 parseRequest();

  $("#add").click(function(){

     var name = $("#super-input").val().toString();

     if(name != ""){
       $.ajax({
         dataType: "json",
         type: "POST",
         url: "json_shopping_table.php",
         data: {
           name: name
         }
       }).done(function(ret){

       });

       console.log($(".names").length);

       if($(".names").length + 1 < 10){
         $("#lista_spesa_arancio").append("<tr class='row-"+name+"'> <th><p class='names'> " + name + " </p></th><th class='check' id='" + name + "'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
       }else if ($(".names").length + 1 < 20 && $(".names").length + 1 >= 10){
         $("#lista_spesa_verde").append("<tr class='row-"+name+"'> <th><p class='names'> " + name + " </p></th><th class='check' id='" + name + "'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
       }else if($(".names").length + 1 < 30 && $(".names").length + 1 >= 20){
         $("#lista_spesa_blu").append("<tr class='row-"+name+"'> <th><p class='names'> " + name + " </p></th><th class='check' id='" + name + "'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
       }else if($(".names").length + 1 < 40 && $(".names").length + 1 >= 30){
         $("#lista_spesa_viola").append("<tr class='row-"+name+"'> <th><p class='names'> " + name + " </p></th><th class='check' id='" + name + "'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
       }else if($(".names").length + 1 < 50 && $(".names").length + 1 >= 40){
         $("#lista_spesa_marrone").append("<tr class='row-"+name+"'> <th><p class='names'> " + name + " </p></th><th class='check' id='" + name + "'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
       }

       eventCheck();

     }

  });

  $("#arancio_d").click(function(){
    $("#lista_spesa_arancio").css("display","block");
    $("#lista_spesa_arancio").css("margin-left","7vw");
    $("#lista_spesa_verde").css("display","none");
    $("#lista_spesa_blu").css("display","none");
    $("#lista_spesa_viola").css("display","none");
    $("#lista_spesa_marrone").css("display","none");
    $("#arancio").css("display","block");
    $("#verde").css("display","block");
    $("#blu").css("display","block");
    $("#viola").css("display","block");
    $("#marrone").css("display","block");
    $(".segnalibri").css("margin-left","0");
  });

  $("#verde_d").click(function(){
    $("#lista_spesa_arancio").css("display","none");
    $("#lista_spesa_verde").css("display","block");
    $("#lista_spesa_blu").css("display","none");
    $("#lista_spesa_viola").css("display","none");
    $("#lista_spesa_marrone").css("display","none");
    $("#arancio").css("display","none");
    $("#verde").css("display","block");
    $("#blu").css("display","block");
    $("#viola").css("display","block");
    $("#marrone").css("display","block");
    $(".segnalibri").css("margin-left","0");
  });

  $("#blu_d").click(function(){
    $("#lista_spesa_arancio").css("display","none");
    $("#lista_spesa_verde").css("display","none");
    $("#lista_spesa_blu").css("display","block");
    $("#lista_spesa_viola").css("display","none");
    $("#lista_spesa_marrone").css("display","none");
    $("#arancio").css("display","none");
    $("#verde").css("display","none");
    $("#blu").css("display","block");
    $("#viola").css("display","block");
    $("#marrone").css("display","block");
    $(".segnalibri").css("margin-left","0");
  });

  $("#viola_d").click(function(){
    $("#lista_spesa_arancio").css("display","none");
    $("#lista_spesa_verde").css("display","none");
    $("#lista_spesa_blu").css("display","none");
    $("#lista_spesa_viola").css("display","block");
    $("#lista_spesa_marrone").css("display","none");
    $("#arancio").css("display","none");
    $("#verde").css("display","none");
    $("#blu").css("display","none");
    $("#viola").css("display","block");
    $("#marrone").css("display","block");
    $(".segnalibri").css("margin-left","0");
  });

  $("#marrone_d").click(function(){
    $("#lista_spesa_arancio").css("display","none");
    $("#lista_spesa_verde").css("display","none");
    $("#lista_spesa_blu").css("display","none");
    $("#lista_spesa_viola").css("display","none");
    $("#lista_spesa_marrone").css("display","block");
    $("#arancio").css("display","none");
    $("#verde").css("display","none");
    $("#blu").css("display","none");
    $("#viola").css("display","none");
    $("#marrone").css("display","block");
    $(".segnalibri").css("margin-left","0");
  });

});

function eventCheck(){
  $(".check").click(function(){

    var nam = $(this).parents("tr").find("th").eq(0).text();
    nam = nam.trim();

      $.ajax({
        dataType: "json",
        type: "GET",
        url: "json_shopping_table.php",
        data: {
          nam: nam
        }
      }).done(function(ret){
        console.log(ret.output.troia);
      });

      $(this).parents("tr").remove();

  });
}

function parseRequest(){

  $.ajax({
    dataType: "json",
    type: "GET",
    url: "json_shopping_list.php",
    data: {

    }
  }).done(function(ret){

    addLista(ret.output.lista);

    eventCheck();

  });

}

function addLista(lista){
  for(i = 0; i < lista.length; i++){
    if($(".names").length + 1 < 10){
        $("#lista_spesa_arancio").append("<tr class='row-"+i+"'> <th><p class='names'> " + lista[i] + " </p></th><th class='check'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
    }else if ($(".names").length + 1 < 20 && $(".names").length + 1 >= 10){
        $("#lista_spesa_verde").append("<tr class='row-"+i+"'> <th><p class='names'> " + lista[i] + " </p></th><th class='check'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
    }else if($(".names").length + 1 < 30 && $(".names").length + 1 >= 20){
        $("#lista_spesa_blu").append("<tr class='row-"+i+"'> <th><p class='names'> " + lista[i] + " </p></th><th class='check'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
    }else if($(".names").length + 1 < 40 && $(".names").length + 1 >= 30){
        $("#lista_spesa_viola").append("<tr class='row-"+i+"'> <th><p class='names'> " + lista[i] + " </p></th><th class='check'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
    }else if($(".names").length + 1 < 50 && $(".names").length + 1 >= 40){
        $("#lista_spesa_marrone").append("<tr class='row-"+i+"'> <th><p class='names'> " + lista[i] + " </p></th><th class='check'> <i style='color: green;text-align: right;' class='fas fa-check-circle'></i> </th> </tr>");
    }
  }


}
