$("document").ready(function (){
    getScore();
});
function getScore(){
    $.ajax({
        url: "/api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function (score){
            $("#score").empty();
            for(i= 0; i< score.length; i++){
                $("#score").append(score[i].idScore+ " "+score[i].score/*+ " "+score[i].reservation*/+" <button onclick='getDetailScore("+score[i].idScore+")'>Seleccionar</<button><button onclick='deleteScore("+score[i].idScore+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getScoreInfo(){
    let data={
        idScore: $("#scoreIdScore").val(),
        score: $("#scoreScore").val()/*,
        reservation: $("#scoreReservation").val()*/
    }
    return data;
}
function cleanScoreInfo(){
    let data={
        idScore: $("#scoreIdScore").val(""),
        score: $("#scoreScore").val("")/*,
        reservation: $("#scoreReservation").val("")*/
    }
    return data;
}
function saveScore(){
    $.ajax({
        url: "/api/Score/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getScoreInfo()),
        success: function (Score){
            getScore();
            console.log(getScoreInfo());
            cleanScoreInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailScore(idScore){
    $.ajax({
        url: "api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function (score){
            let data={
                idScore: $("#scoreIdScore").val(score[0].idScore),
                score: $("#scoreScore").val(score[0].score)/*,
                reservation: $("#scoreReservation").val(score[0].reservation)*/
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}