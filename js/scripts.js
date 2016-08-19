$(document).ready(function() {

// Back-end Logic

// Front-end logic
  $("form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#numInput").val());
    console.log(parseInt($("#numInput").val()));

    if (isNaN(inputNumber)) {
      $("#error").show();
      $("#results").hide();
    } else {
      $("#results").show();
      $("#error").hide();
    }

  });
});
