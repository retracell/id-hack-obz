$(document).on('pagebeforeshow', '#index', function(){       
    $(document).on('click', '#change-page-button', function(){     
        //Change page
        $.mobile.changePage("#second");
    });

    $(document).on('click', '#change-page-prescription', function(){
        $.mobile.changePage("#third");
    });
});



// Store object
var storeObject = {
    patient : '',
    diagnosis : '' 
}
