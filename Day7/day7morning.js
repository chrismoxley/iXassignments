
// window.onload = function() {
  //console.log the values of First Name and Last Name 
  function getFormValues(Name) { 
  var m = document.getElementById('name1').getAttribute('value');
  var n = document.getElementById('name2').getAttribute('value');
  console.log(m,n);
}
  // Change the color of the div with id "color-div"
  function changeColor() {
    // var sheet = document.createElement('style');
    // sheet.innerHTML = "div {color: red}";
    // document.body.appendChild(sheet);
    document.getElementById('color-div').style.color = "red";
  }

//}