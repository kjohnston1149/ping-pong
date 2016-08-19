$(document).ready(function() {

// Back-end Logic
var convert = function(inputNumber) {
  var countArray = []
   for (var i = 1; i <= inputNumber; i++) {
     countArray.push(i);
   }
   console.log(countArray);

}
// Front-end logic
  $("form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#numInput").val());
    var results = convert(inputNumber)

    if (isNaN(inputNumber)) {
      $("#error").show();
      $("#results").hide();
    } else {
      $("#results").show();
      $("#error").hide();
    }

  });
});
