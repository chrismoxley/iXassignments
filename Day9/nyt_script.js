$(document).ready(function() {
  $("#finder").keypress(function(e) {
  	if (e.keyCode === 13) {
  		search($("#finder").val());
  	};
  });

});

var search = function(term){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b4abd781d83d42bfa5f05d352ecfbf6e" + "&q=" + term;


  $.ajax({
    url: url, 
    method: "GET",
    success: handleResponse,
    error: function(error) {
      alert("error!");
    }
  });
}
function handleResponse(response) {

  
 
  for (var i=0; i<response.response.docs.length; i++) {
    $("#list").append($("<li></li>").html("<a href=" + response.response.docs[i].web_url + ">" + response.response.docs[i].headline.main + "</a>"));
  }
}