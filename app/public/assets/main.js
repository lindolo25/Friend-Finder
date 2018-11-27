let init = function()
{
    $("#survey").on("submit", surveySubmitHandler);
    $('.survey-question input').change(questionChange);
}

let surveySubmitHandler = function(event)
{
    console.log("form submited");
    event.preventDefault();
    var surveyResult = {
        name: $("#survey-name").val().trim(),
        photo: $("#survey-photo-link").val().trim(),
        scores: []
    }

    if(surveyResult.name && surveyResult.photo)
    {
        var questions = $(".survey-question");
        for(var i = 0; i < questions.length; i++)
        {
            var temp = $(questions[i]).attr("data-value");
            surveyResult.scores.push(temp); 
        }
        sendSurvey(surveyResult);
    }
    else
    {
        $("#survey-name").val(surveyResult.name);
        $("#survey-photo-link").val(surveyResult.photo);
        $("#survey").addClass("was-validated");
    }
}

let questionChange = function () 
{
    var value = $(this).attr("data-value");
    $(this).parents(".survey-question").attr("data-value", value);
    console.log(value);
}

let sendSurvey = function(surveyResult)
{
    console.log(surveyResult);
}



