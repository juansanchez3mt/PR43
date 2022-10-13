$("document").ready(function (){
    getReservation();
});
function getReservation(){
    $.ajax({
        url: "/api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (reservation){
            $("#reservation").empty();
            for(i= 0; i< reservation.length; i++){
                $("#reservation").append(reservation[i].idReservation+ " "+reservation[i].startDate+ " "+reservation[i].devolutionDate+ " "+ reservation[i].status/*+ " "+reservation[i].lib+ " "+reservation[i].client*/+" <button onclick='getDetailReservation("+reservation[i].idReservation+")'>Seleccionar</<button><button onclick='deleteReservation("+reservation[i].idReservation+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getReservationInfo(){
    let data={
        idReservation: $("#reservationIdReservation").val(),
        startDate: $("#reservationStartDate").val(),
        devolutionDate: $("#reservationDevolutionDate").val(),
        status: $("#reservationStatus").val()/*,
        lib: $("#reservationLib").val(),
        client: $("#reservationClient").val()*/
    }
    return data;
}
function cleanReservationInfo(){
    let data={
        idReservation: $("#reservationIdReservation").val(""),
        startDate: $("#reservationStartDate").val(""),
        devolutionDate: $("#reservationDevolutionDate").val(""),
        status: $("#reservationStatus").val("")/*,
        lib: $("#reservationLib").val(""),
        client: $("#reservationClient").val("")*/
    }
    return data;
}
function saveReservation(){
    $.ajax({
        url: "api/Reservation/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getReservationInfo()),
        success: function (Reservation){
            getReservation();
            console.log(getReservationInfo());
            cleanReservationInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailReservation(idReservation){
    $.ajax({
        url: "api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (reservation){
            let data={
                idReservation: $("#reservationIdReservation").val(reservation[0].idReservation),
                startDate: $("#reservationStartDate").val(reservation[0].startDate),
                devolutionDate: $("#reservationDevolutionDate").val(reservation[0].devolutionDate),
                status: $("#reservationStatus").val(reservation[0].status)/*,
                lib: $("#reservationLib").val(reservation[0].lib),
                client: $("#reservationClient").val(reservation[0].client)*/
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}