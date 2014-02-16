$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('click', '#change-page-button', function(){     
        //Change page
        $.mobile.changePage("#second");
    });

});

$(document).on('pagebeforeshow', '#index', function(){
    $(document).on('click', '#change-page-diagnose', function(){
        storeObject.diagnose = $('input[name=diagnosis]:checked').val();
        $.mobile.changePage("#third");
    });
});

$(document).on("pageshow", "#second", function(){
   
    $("#second #patient-name").val(storeObject.patient);
    for (i=0;i<storeObject.diagnosis.length; i++){
            $("fieldset").append("<input type='radio' name='diagnosis' value="+storeObject.diagnosis[i][1]+"/><label for='radio-choice-2'>"+storeObject.diagnosis[i][1]+"</label><br/>"    );
    }
});

$(document).on("pageinit", "#third", function(){
    location.reload();
    $("#third #patient-name").text(storeObject.patient);
    $("#third #diagnosis-name").text(storeObject.diagnose);
    for (i=0;i<storeObject.prescriptions.length; i++){
            $("fieldset").append("<input type='checkboxes' name='prescription' value="+i
            +"/><label for='radio-choice-2'>"+storeObject.prescriptions[i][1]+"</label>");
    }
});


// Store object
var storeObject = {
    patient : '',
    diagnosis : '',
    diagnose : '',
    prescriptions : '',
    recommended : '' 
}
