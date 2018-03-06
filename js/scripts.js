

$(document).ready(function() {
  $('#input form').submit(function(event) {
    event.preventDefault();
    debugger;
    var bigNum = parseInt($('input#userInput').val());
    var multipleNum = parseInt($('input#countBy').val());
    var multiples = [];

      for (var i = multipleNum; i <= bigNum; i += multipleNum) {

        if (bigNum % i === 0) {
          multiples.push(i);
        };


     $('#output').text(multiples);
  };
 });
});
