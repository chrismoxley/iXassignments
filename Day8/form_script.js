$(document).ready(function(){
	$("#submit-btn").click(function() {
    var phoneValidator = function(phoneNum) {
      var phoneNum = $("#phone").val();
      var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;  
      if(phoneNum.match(phoneno))  
      {  
       $("#ans1").html("Thanks for inputing your phone number.").css({color: 'green'});
       return true;
     }  
     else  
     {  
       $("#ans1").html("Your phone number needs to be all numbers and in the format XXX-XXX-XXXX.").css({color: 'red'});  
       return false;  
     }  
   }
   var emailValidator = function(email) {
    var emailc = $("#email").val();
    var emailCode = /^\(?([0-9,a-z,A-Z]{3})\)?[@]?([0-9,a-z,A-Z]{3})[.]?([0-9,a-z,A-Z]{3})$/;  
    if(emailc.match(emailCode))  {  
     $("#ans2").html("Thanks for inputing your email.").css({color: 'green'});
     return true;  
   }  
   else  {  
    $("#ans2").html("Your email needs to be in the format XXX@XXX.XXX.").css({color: 'red'});  
    return false;  
  };
};
phoneValidator();
emailValidator();
});
});