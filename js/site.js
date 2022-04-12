$(document).ready(function () {
  var numOne;
  var numTwo;
  var operator;
  var $display = $(".total");

  function reset() {
    numOne = null;
    numTwo = null;
    operator = null;
    $display.text("0");
  }
  reset();

  function testNumLength(number) {
    if (number.lenght > 12) {
      $display.text("too long!");
    }
  }

  $(".numbers a").click(function () {
    var clinkDigit = $(this).text();
    var currentVal = $display.text();
    var newVal;
    if (currentVal == "0") {
      newVal = clinkDigit;
    } else {
      newVal = currentVal + clinkDigit;
    }
    $display.text(newVal);
    testNumLength($display.text());
  });

  $(".operators a").click(function () {
    operator = $(this).text();
    numOne = parseFloat($display.text());
    $display.text("0");
  });

  $("#equals").click(function () {
    var total;

    numTwo = parseFloat($display.text());

    if (operator === "+") {
      total = numOne + numTwo;
    } else if (operator === "-") {
      total = numOne - numTwo;
    } else if (operator === "/") {
      total = numOne / numTwo;
    } else if (operator === "*") {
      total = numOne * numTwo;
    }

    $display.text(total);
    testNumLength($display.text());
  });
  // Call reset function
  $("#clear").click(function () {
    reset();
  });
});
