$(document).on("pageinit", "#home",function(){
$.get("symptoms.txt", function(data){
	console.log("here");
/*
	symp = data.split("\n");
	len = symp.length;
	for (i=0; i<len; i++){
		$("ul").append("<li><a href='#'>"+symp[0]+"</a></li>");
	}*/
});
});
