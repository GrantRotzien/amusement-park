$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? (Inches)"));

  if (height >= 56){
    $('#tall').show();
  } else {
    $('#tooshort').show();
  }
});
