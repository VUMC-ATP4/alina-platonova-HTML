$(document).ready(function() {
    
    // pēc izvēlnes nospiešanas (mob. un planšetēs) parādās krustiņš un headers
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    // noņemas izvēlnes krustiņš un headers paliek default pozīcijā pēc scrolling 
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        
        // space-rocket poga parādās, kad lietotājs ir ticis tālāk par home sadaļu
        if($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e) {
        e.preventDefault();
        $('html, body').animate( {
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear' 
        );
    });

});