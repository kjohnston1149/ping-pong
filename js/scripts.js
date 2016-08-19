$(document).ready(function() {

// Back-end Logic
var converts = function(inputNumber) {
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
   console.log(pingPongArray);
   var outputStrings = pingPongArray.toString().split(",");
     console.log(outputStrings);
    return outputStrings;
};
// Front-end logic
  $("form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#numInput").val());
    var results = converts(inputNumber);
    console.log(converts);

    results.forEach(function(result) {
      $('ul').append('<li>' + result + '</li>');
    });

    if (isNaN(inputNumber)) {
      $("#error").show();
      $("#results").hide();
    } else {
      $("#results").show();
      $("#error").hide();
    }

  });
});
