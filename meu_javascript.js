$(function(){  
    $("#legumes2").mouseover(function(){
        alert("O cursor foi posicionado sobre a div.")
    });
});

$(document).ready(function(){

    $('#backtopo').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#backtopo').fadeIn();
            } else {
                $('#backtopo').fadeOut();
            }
        });

        $('#backtopo').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
