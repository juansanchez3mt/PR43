$("document").ready(function (){
    getClient();
});
function getClient(){
    $.ajax({
        url: "/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function(client){
            $("#client").empty();
            for(i= 0; i< client.length; i++){
                $("#client").append(client[i].idClient+ " "+ client[i].name+ " "+ client[i].age+ " "+ client[i].email+ " <button onclick='getDetailClient("+client[i].idClient+")'>Seleccionar</button><button onclick='deleteClient("+client[i].idClient+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getClientInfo(){
    let data={
        idClient: $("#clientIdClient").val(),
        email: $("#clientEmail").val(),
        name: $("#clientName").val(),
        age: $("#clientAge").val(),
        password: $("#clientPassword").val()
    }
    return data;
}
function cleanClientInfo(){
    let data={
        idClient: $("#clientIdClient").val(""),
        email: $("#clientEmail").val(""),
        name: $("#clientName").val(""),
        age: $("#clientAge").val(""),
        password: $("#clientPassword").val("")
    }
    return data;
}
function saveClient(){
    $.ajax({
        url: "/api/Client/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getClientInfo()),
        success: function (client){
            getClient();
            console.log(getClientInfo());
            cleanClientInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailClient(idClient){
    $.ajax({
        url: "api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (client){
            let data={
                idClient: $("#clientIdClient").val(client[0].idClient),
                email: $("#clientEmail").val(client[0].email),
                name: $("#clientName").val(client[0].name),
                age: $("#clientAge").val(client[0].age),
                password: $("#clientPassword").val(client[0].password)
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}