let init = function()
{
    $("#survey").on("submit", surveySubmitHandler);
    $('#survey-questions').on("change", ".survey-question input", questionChange);
    loadQuestions();
}

let surveySubmitHandler = function(event)
{
    //console.log("form submited");
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
    //console.log(value);
}

let sendSurvey = function(surveyResult)
{
    $.ajax({ 
        url: "/api/survey", 
        method: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(surveyResult)
    }).then(function(match) 
        {
            showMatch(match);
        });
}

let showMatch = function(match)
{
    var image = $('<img class="profile-photo" src="{0}" />'.format(match.photo));
    var name = $('<h1 class="profile-name">{0}</h1>'.format(match.name));
    var link = $('<a href="./" class="btn btn-primary">Go Back Home</a>');

    $("#document-body").empty().append(image, name, link).addClass("text-center");
}

let loadQuestions = function()
{
    $.ajax({ url: "/api/survey", method: "GET" })
        .then(function(questions) 
        {
            for (var i = 0; i < questions.length; i++) 
            {
                let index = $('<div class="col-1"><h2>{0}.</h2></div>'.format(1 + i));
                let qBody = $('<div class="col-11"><p>{0}</p></div>'.format(questions[i]));
                let options = $('<div class="col-11 offset-1"></div>');
                for(y = 1; y < 6; y++)
                {
                    options.append('<div class="custom-control custom-radio form-check form-check-inline">\
                            <input type="radio" class="custom-control-input" id="survey-option-{0}{1}" data-value="{1}" name="survey-value-{0}" required>\
                            <label class="custom-control-label" for="survey-option-{0}{1}">{1}</label>\
                        </div>'.format(i, y));
                }
                let question = $('<section id="survey-question-{0}" class="survey-question row" data-index="{0}" data-value="0"></section>'.format(i));
                question.append(index, qBody, options)
                $("#survey-questions").append(question);
            }
        });
}



