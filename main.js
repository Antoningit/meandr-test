$(document).ready(function() {
    var total = 0;
    var rotate = 0;
  
    $("input:checkbox").on('change', function() {
      calculateTotal(this);
      count();
    });
  
    function calculateTotal(checkbox) {
      var checked = checkbox.checked;
      var val = +checkbox.value;
      total = checked ? total + val : total - val;
      rotate = checked ? rotate + 10 : rotate - 10;
  
      $('.bull').css({"transform": "rotate(" + rotate + "deg)"});
      $("#price").text(total);
    }
    
    function count() {
    $('#price').each(function () {
      $(this).prop('Counter',total.val).animate({
       Counter: $(this).text()
       }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
           $(this).text(Math.ceil(now));
        }
       });
   });
  }

  });