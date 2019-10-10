$(document).ready(function() {
    var total = 0;
    var rotate = 0;
    function CalculateTotal() {
        $("input:checkbox").each(function() {
            if ($(this).is(":checked")) {
                total += parseFloat($(this).val());
            } 
        });
        $("input:checkbox").each(function() {
            if ($(this).is(":checked"))
            {
                rotate = rotate + 10;
                
                $('.bull').css ({
                    "transform": "rotate("+rotate+"deg)"
                })
                
            }
        });
        $("#price").html(total);
    }
    //
    $("input:checkbox").change(function(){
        total = 0;
        CalculateTotal();
    }).trigger("change");
    //
    $('#price2').each(function () {
        $(this).prop('Counter',0).animate({
         Counter: $(this).text()
         }, {
          duration: 1500,
          easing: 'swing',
          step: function (now) {
             $(this).text(Math.ceil(now));
          }
         });
     });
    });