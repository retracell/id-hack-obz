$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('click', '#change-page-button', function(){     
        //Change page
        $.mobile.changePage("#second");
    });

});

$(document).on('pagebeforeshow', '#index', function(){
    $(document).on('click', '#change-page-prescription', function(){
        storeObject.diagnose = $('input[name=diagnosis]:checked').text();
        $.mobile.changePage("#third");
    });
});

$(document).on("pageshow", "#second", function(){
   
    $("#second #patient-name").text(storeObject.patient);
    for (i=0;i<storeObject.diagnosis.length; i++){
            $("fieldset").append("<input type='radio' name='diagnosis' value="+i
            +"/>"+storeObject.diagnosis[i][1]+"<br>"    );
    }
});

$(document).on("pageshow", "#third", function(){
    $("#third #patient-name").text(storeObject.patient);
    $("#third #diagnosis-name").text(storeObject.diagnose);
    for (i=0;i<storeObject.prescription.length; i++){
            $("fieldset").append("<input type='checkboxes' name='prescription' value="+i
            +"/><label for='radio-choice-2'>"+storeObject.prescription[i][1]+"</label>");
    }
});


// Store object
var storeObject = {
    patient : '',
    diagnosis : '' 
}
