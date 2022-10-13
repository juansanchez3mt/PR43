$("document").ready(function (){
    getLibrary();
});
function getLibrary(){
    $.ajax({
        url: "api/Lib/all",
        type: 'GET',
        dataType: 'json',
        success: function (library){
            $("#library").empty();
            for(i= 0; i< library.length; i++){
                $("#library").append(library[i].id+ " "+ library[i].name+ " "+ library[i].target+ " "+ library[i].capacity+ " "+ library[i].description+ /*" "+ category[i].id+*/ " <button onclick='getDetailLibrary("+library[i].idLibrary+")'>Seleccionar</button><button onclick='deleteLibrary("+library[i].idLibrary+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getLibraryInfo(){
    let data={
        id: $("#libraryId").val(),
        name: $("#libraryName").val(),
        target: $("#libraryTarget").val(),
        capacity: $("#libraryCapacity").val(),
        description: $("#libraryDescription").val(),
        category:{
            id: $("#category option:selected").val()
        }
    }
    return data;
}
function cleanLibraryInfo(){
    let data={
        id: $("#libraryId").val(""),
        name: $("#libraryName").val(""),
        target: $("#libraryTarget").val(""),
        capacity: $("#libraryCapacity").val(""),
        description: $("#libraryDescription").val(""),
        category:{
            id: $("#category option:selected").val("")
        }
    }
    return data;
}
function saveLibrary(){
    $.ajax({
        url: "api/Lib/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getLibraryInfo()),
        success: function (Library) {
            getLibrary();
            console.log(getLibraryInfo());
            cleanLibraryInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailLibrary(idLibrary){
    $.ajax({
        url: "api/Lib/all",
        type: 'GET',
        dataType: 'json',
        success: function (library){
            let data= {
                id: $("#libraryId").val(library[0].id),
                name: $("#libraryName").val(library[0].name),
                target: $("#libraryTarget").val(library[0].target),
                capacity: $("#libraryCapacity").val(library[0].capacity),
                description: $("#libraryDescription").val(library[0].description),
                category: {
                    id: $("#category option:selected").val(category[0].category)
                }
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}