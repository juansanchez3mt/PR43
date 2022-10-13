$("document").ready(function (){
    getMessage();
});
function getMessage(){
    $.ajax({
        url: "/api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (message){
            $("#message").empty();
            for(i= 0; i< message.length; i++){
                $("#message").append(message[i].idMessage+ " "+ message[i].messageText+ " "+ message[i].lib+ " "+message[i].client+ " <button onclick='getDetailMessage("+message[i].idMessage+")'>Seleccionar</<button><button onclick='deleteMessage("+message[i].idMessage+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getMessageInfo(){
    let data={
        idMessage: $("#messageIdMessage").val(),
        messageText: $("#messageMessageText").val()/*,
        lib: $("#messageLib").val(),
        client: $("#messageClient").val()*/
    }
    return data;
}
function cleanMessageInfo(){
    let data={
        idMessage: $("#messageIdMessage").val(""),
        messageText: $("#messageMessageText").val("")/*,
        lib: $("#messageLib").val(""),
        client: $("#messageClient").val("")*/
    }
    return data;
}
function saveMessage(){
    $.ajax({
        url: "/api/Message/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getMessageInfo()),
        success: function (Message){
            getMessage();
            console.log(getMessageInfo());
            cleanMessageInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailMessage(idMessage){
    $.ajax({
        url: "api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (message){
            let data={
                idMessage: $("#messageIdMessage").val(message[0].idMessage),
                messageText: $("#messageMessageText").val(message[0].messageText)/*,
                lib: $("#messageLib").val(message[0].lib),
                client: $("#messageClient").val(message[0].client)*/
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}