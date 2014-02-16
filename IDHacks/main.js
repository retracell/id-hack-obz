$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('click', '#change-page-button', function(){     
        //Change page
        $.mobile.changePage("#second");
    });

});

$(document).on('pagebeforeshow', '#second', function(){
    $(document).on('click', '#change-page-diagnose', function(){
        storeObject.diagnose = $('input[name=diagnosis]:checked').val();
        $.mobile.changePage("#third");
    });
});

$(document).on("pageshow", "#second", function(){
    $("#second #patient-name").val(storeObject.patient);
    for (i=0;i<storeObject.diagnosis.length; i++){
            $("#fs1").append("<input type='radio' name='diagnosis' value="+storeObject.diagnosis[i][1]+"/><label for='radio-choice-2'>"+storeObject.diagnosis[i][1]+"</label><br/>"    );
    }
});

$(document).on("pageshow", "#third", function(){
    $("#third #patient-name").val(storeObject.patient);
    $("#third #diagnosis-name").val(storeObject.diagnose.slice(0,-1));
    for (i=0;i<storeObject.prescriptions.length; i++){
            $("#fs2").append("<input type='checkbox' name='prescription' value="+storeObject.prescriptions[i][0]+"/><label for='radio-choice-2'>"+storeObject.prescriptions[i][0]+"</label><br/>");
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
