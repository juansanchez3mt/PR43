$("document").ready(function (){
    getScores();
});
function getScores(){
    $.ajax({
        url: "api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function (scores){
            $("#scores").empty();
            for(i= 0; i< scores.length; i++){
                $("#scores").append("<option value='"+scores[i].idScore+"'>"+scores[i].idScore+ " "+scores[i].score+ "</option><button onclick='getDetailScores("+scores[i].idScore+")'>Seleccionar</<button><button onclick='deleteScores("+scores[i].idScore+")'>Borrar</button><br>");
            }
        },
        error: function (xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getScoresInfo(){
    let data={
        idScore: $("#scoresIdScore").val(),
        score: $("#scoresScore").val()
    }
    return data;
}
function cleanScoresInfo(){
    let data={
        idScore: $("#scoreIdScore").val(""),
        score: $("#scoreScore").val("")
    }
    return data;
}
function saveScores(){
    $.ajax({
        url: "api/Score/save",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(getScoresInfo()),
        success: function (Score){
            getScores();
            console.log(getScoresInfo());
            cleanScoresInfo();
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}
function getDetailScores(idScore){
    $.ajax({
        url: "api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function (scores){
            let data={
                idScore: $("#scoresIdScore").val(scores[0].idScore),
                score: $("#scoresScore").val(scores[0].score)
            }
        },
        error: function(xhr, status){
            alert('Ha sucedido un problema');
        }
    });
}