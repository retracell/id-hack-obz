$(document).on("pageinit", "#diagnosis",function(){
	$.getJSON("localhost:5000/diagnosis", function(data){
		console.log(data);	
	});
});

$(document).on("pageinit", "#prescription", function(){

});