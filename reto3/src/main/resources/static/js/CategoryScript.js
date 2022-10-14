$("document").ready(function (){
    getCategory();
});
function getCategory(){
    $.ajax({
        url: "api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (category){
            $("#category").empty();
            for(i= 0; i< category.length; i++){
                $("#category").append("<option value='"+category[i].id+"'>"+category[i].id+ " "+ category[i].name+ " "+ category[i].description+ "</option><button onclick='getDetailCategory("+category[i].id+")'>Seleccionar</button><button onclick='deleteCategory("+category[i].id+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getCategoryinfo(){
    let data={
        id: $("#categoryId").val(),
        name: $("#categoryName").val(),
        description: $("#categoryDescription").val(),
        libs:{
            id: $("#libs option:selected").val()
        }
    }
    return data;
}
function cleanCategoryInfo(){
    let data={
        id: $("#categoryId").val(""),
        name: $("#categoryName").val(""),
        description: $("#categoryDescription").val(""),
        libs:{
            id: $("#libs option:selected").val("")
        }
    }
    return data;
}
function saveCategory(){
    $.ajax({
        url: "api/Category/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getCategory()),
        success: function (client){
            getCategory();
            console.log(getCategory());
            cleanCategoryInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailCategory(id){
    $.ajax({
        url: "api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (category){
            let data={
                id: $("#categoryId").val(category[0].id),
                name: $("#categoryName").val(category[0].name),
                description: $("#categoryDescription").val(category[0].description),
                libs:{
                    id: $("#libs option:selected").val(category[0].libs)
                }
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function deleteCategory(id){

}