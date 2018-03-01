

$(document).ready(function() {
  $('#input form').submit(function(event) {
    event.preventDefault();

    var bigNum = parseInt($('input#userInput').val());
    var multipleNum = parseInt($('input#countBy').val());
    var multiples = [];

      for (var i = 0; i <= bigNum; i += multipleNum) {
      multiples.push(i);
      console.log('hi');
     document.write(multiples);
  };
 });
});
