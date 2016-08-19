$(document).ready(function() {

// Back-end Logic
var convert = function(inputNumber) {
  var countArray = []
   for (var i = 1; i <= inputNumber; i++) {
     countArray.push(i);
   }
  // var countString = countArray.toString().split(",");
  //   console.log(countString);
  var pingPongArray = []
   for (var j = 1; j <= countArray.length; j++){
    if (j % 3 === 0) {
      pingPongArray.push("ping");
    } else if (j % 5 === 0) {
      pingPongArray.push("pong");
    } else {
      pingPongArray.push(j);
    }
  };
   console.log(pingPongArray);
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
