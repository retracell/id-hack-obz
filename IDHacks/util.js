$(document).on("pageshow", "#diagnosis",function(){
	$.get("../result.json", function(data){
		$("#patient").val(data.patient);
		for (i=0;i<data.result.length; i++){
			$("fieldset").append("<input type='radio' name='radio-choice' value="+i
			+"/><label for='radio-choice-2'>"+data.result[i][1]+"</label>");
		}
	});
});

$(document).on("pageshow", "#prescriptions",function(){
	$.get("../result.json", function(data){
		$("#patient").val(data.patient);
		for (i=0;i<data.result.length; i++){
			$("fieldset").append("<input type='radio' name='radio-choice' value="+i
			+"/><label for='radio-choice-2'>"+data.result[i][1]+"</label>");
		}
	});
});