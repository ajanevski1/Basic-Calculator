$(function () {
  $("button").click(function () {
    var a = +$("#aa").val();
    var b = +$("#bb").val();
    var c = $("#kalkulator input:checked").val();

    if (c == 1) {
      $("p").html(a + b);
    }
    if (c == 2) {
      $("p").html(a - b);
    }
    if (c == 3) {
      $("p").html(a * b);
    }
    if (c == 4) {
      $("p").html(a / b);
    }
    if (c == 5) {
      $("p").html(Math.sin(a));
    }
    if (c == 6) {
      $("p").html(Math.cos(a));
    }
    if (c == 7) {
      $("p").html(Math.tan(a));
    }
    if (c == 8) {
      $("p").html(Math.abs(a));
    }
    if (c == 9) {
      $("p").html(Math.pow(a, b));
    }
    if (c == 10) {
      $("p").html(Math.sqrt(a));
    }
  });
});
