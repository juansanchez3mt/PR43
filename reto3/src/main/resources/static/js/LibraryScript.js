$("document").ready(function (){
    getLibrary();
});
function getLibrary(){
    $.ajax({
        url: "/api/Library/all",
        type: 'GET',
        dataType: 'json',
        success: function (library){
            $("#library").empty();
            for(i= 0; i< library.length; i++){
                $("#library").append(library[i].idLibrary+ " "+ library[i].name+ " "+ library[i].target+ " "+ library[i].capacity+ " "+ library[i].description+ " "+ library[i].category+ " <button onclick='getDetailLibrary("+library[i].idLibrary+")'>Seleccionar</button><button onclick='deleteLibrary("+library[i].idLibrary+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getLibraryInfo(){
    let data={
        idLibrary: $("#libraryIdLibrary").val(),
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
        idLibrary: $("#libraryIdLibrary").val(""),
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
        url: "api/Library/save",
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
        url: "api/Library/all",
        type: 'GET',
        dataType: 'json',
        success: function (library){
            let data= {
                idLibrary: $("#libraryIdLibrary").val(library[0].idLibrary),
                name: $("#libraryName").val(library[0].name),
                target: $("#libraryTarget").val(library[0].target),
                capacity: $("#libraryCapacity").val(library[0].capacity),
                description: $("#libraryDescription").val(library[0].description),
                category: {
                    id: $("#category option:selected").val(library[0].category)
                }
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}