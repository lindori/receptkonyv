$(function(){    
    $.ajax({url: "receptek.json", success: function(result){ receptekTomb=(result); kiir();}});
    $("article").on("click","tr",megjelenit);
});

var receptekTomb=[];

function kiir(){
    $("article").empty();
    for (var item in receptekTomb) {
        var etelekFelvet ="<p><b>eve</b>: "+receptekTomb[item]["nev"]+"</p>\n\
                          <p><b>kategória</b>: "+receptekTomb[item]["kategoria"]+"</p>\n\
                          <p><b>elkészítési idő</b>: "+receptekTomb[item]["elkeszitesi_ido"]+"</p>\n\
                           <img src='" + receptekTomb[item]['eleresi_ut'] + "' alt='" + receptekTomb[item]['eleresi_ut'].slice(6,receptekTomb[item]['eleresi_ut'].length-4) + "' >\n\
                            <p><b>ar</b>: "+receptekTomb[item]["ar"]+" Ft</p>\n\
                           <p><b>db</b>: <input type='text' id='"+receptekTomb[item]["nev"]+"_db'></p>\n\
                            <div id=gombok><input type='button' class='modosit' index='"+item+"' value='módosít'><input type='button' class='torol' index='"+item+"' value='töröl'></div>";
                        $("article").append("<div id='"+receptekTomb[item]["nev"]+"'>"+etelekFelvet+"</div>");

                        }

    }
    
function megjelenit(){
    var id=Number($(this).attr("id"));
    megjelenitRecept(id);
}

function megjelenitRecept(recept){
    $("section").empty();
    $("section").append("<h2></h2>");
	$("section h2").append(recept);
}

