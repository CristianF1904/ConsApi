$("#enviar").click(function(){
    $.get("https://rickandmortyapi.com/api/character",function(data){
        $.each(data.results, function(i,item){
            $("#categoria").append("<tr><td>"+item.id+
                                    "</td><td>"+item.name+
                                    "</td><td>"+item.species+
                                    "</td><td>"+item.gender+
                                    "</td><td><button onclick="+"location.href="+"'https://rickandmortyapi.com/api/character/"+item.id+"'>"+"Detalle"+"</button></td>")
        })


    })


})