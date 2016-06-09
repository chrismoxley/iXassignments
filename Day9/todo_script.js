$(document).ready(function(){
	$("#todo-input").keyup(function(e) {
	if (e.keyCode === 13) {
		listit($("#todo-input").val())
		$("#todo-input").val("")
	}
	});
	var listit = function(value){
		$("#list").append($("<li></li>").html(value))
	}
})