$(document).on("pageinit", "#index", function(){

});
$(document).on("pageshow", "#third",function(){
		$("#patient").val(patient);
		for (i=0;i<diagnosis.length; i++){
			$("fieldset").append("<input type='radio' name='radio-choice' value="+i
			+"/><label for='radio-choice-2'>"+diagnosis[i][1]+"</label>");
		}
	});
});