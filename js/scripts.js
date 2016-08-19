$(document).ready(function() {

// Back-end Logic
var ppConverts = function(inputNumber) {
  var countArray = []
   for (var i = 1; i <= inputNumber; i++) {
     countArray.push(i);
   }
  var pingPongArray = []
   for (var j = 1; j <= countArray.length; j++){
     if (j % 15 === 0) {
       pingPongArray.push("ping-pong");
     } else if (j % 5 === 0) {
       pingPongArray.push("pong");
     } else if (j % 3 === 0) {
       pingPongArray.push("ping");
     } else {
       pingPongArray.push(j);
     }
   };
   var outputStrings = pingPongArray.toString().split(",");
   return outputStrings;
};
// Front-end logic
  $("form").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#numInput").val());
    var results = ppConverts(inputNumber);

    results.forEach(function(result) {
      $('#resultList').append('<li>' + result + '</li>');

  });


    if (isNaN(inputNumber) || inputNumber <= 0) {
      $("#error").show();
      $("#results").hide();
    } else {
      $("#results").show();
      $("#error").hide();
    }

  $("form").each(function(){
    this.reset();
  });
});
});
