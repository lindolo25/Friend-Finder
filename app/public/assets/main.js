let init = function()
{
    $("#survey").on("submit", surveySubmitHandler);
    $('.survey-question input').change(questionChange);
}

var surveySubmitHandler = function(event)
{
    event.preventDefault();
    console.log("form submited");
}

var questionChange = function () 
{
    var value = $(this).attr("data-value");
    $(this).parents(".survey-question").attr("data-value", value);
    console.log(value);
}

var sendSurvey = function(surveyResult)
{

}



