$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('click', '#change-page-button', function(){     
        //Change page
        $.mobile.changePage("#second");
    });

});

$(document).on('pagebeforeshow', '#index', function(){
    $(document).on('click', '#change-page-prescription', function(){
        storeObject.diagnose = $('input[name=diagnosis]:checked').val();
        $.mobile.changePage("#third");
    });
});

$(document).on("pageshow", "#second", function(){
   
    $("#second #patient-name").text(storeObject.patient);
    for (i=0;i<storeObject.diagnosis.length; i++){
            $("fieldset").append("<input type='radio' name='diagnosis' value="+storeObject.diagnosis[i][1]+"/><label for='radio-choice-2'>"+storeObject.diagnosis[i][1]+"</label><br/>"    );
    }
});

$(document).on("pageshow", "#third", function(){
    $("#third #patient-name").text(storeObject.patient);
    $("#third #diagnosis-name").text(storeObject.diagnose);
    for (i=0;i<storeObject.diagnosis.length; i++){
            $("fieldset").append("<input type='radio' name='radio-choice' value="+i
            +"/><label for='radio-choice-2'>"+storeObject.diagnosis[i][1]+"</label>");
    }
});


// Store object
var storeObject = {
    patient : '',
    diagnosis : '' 
}
