$("document").ready(function (){
    getCategory();
});
function getCategory(){
    $.ajax({
        url: "/api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (category){
            $("#category").empty();
            for(i= 0; i< category.length; i++){
                $("#category").append(category[i].idCategory+ " "+ category[i].name+ " "+ category[i].description+ " <button onclick='getDetailCategory("+category[i].idCategory+")'>Seleccionar</button><button onclick='deleteCategory("+category[i].idCategory+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getCategoryinfo(){
    let data={
        idCategory: $("#categoryIdCategory").val(),
        name: $("#categoryName").val(),
        description: $("#categoryDescription").val()
    }
    return data;
}
function cleanCategoryInfo(){
    let data={
        idCategory: $("#categoryIdCategory").val(""),
        name: $("#categoryName").val(""),
        description: $("#categoryDescription").val("")
    }
    return data;
}
function saveCategory(){

    $.ajax({
        url: "api/Category/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getCategoryinfo()),
        success: function (category){
            getCategory();
            console.log(getCategoryinfo());
            cleanCategoryInfo();
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailCategory(idCategory){
    $.ajax({
        url: "api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (category){
            let data={
                idCategory: $("#categoryIdCategory").val(category[0].idCategory),
                name: $("#categoryName").val(category[0].name),
                description: $("#categoryDescription").val(category[0].description)
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}