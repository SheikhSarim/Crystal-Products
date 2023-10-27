// Header
$('.brs').click(function() {
    $('.side').css({transform: 'translateX(0%)', visibility: 'visible', width: '100%'});
    $('html').css('overflow', 'hidden');
    $('body').css('overflow', 'hidden');
});
$('.close').click(function() {
    $('.side').css({transform: 'translateX(100%)', visibility: 'hidden', width: '0%'});
    $('html').css('overflow-y', 'auto');
    $('body').css('overflow-', 'auto');
});
// logo Slider
$('.owl1').owlCarousel({
    nav: true,
    loop: true,
    margin: 60,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    navText: ["<img src='./images/left_arrow.png' >", "<img src='./images/right_arrow.png' >"],
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    rtl: false,
    responsive: {
        0: {
            items: 1
        }
    }
});
// Products Page
$('.items').click(function(){
    $('.items').removeClass('aactive');
    $(this).addClass('aactive');
    const value = $(this).attr('data-filter');
    if (value == 'all')
    {
        $('.crd').show('1000');
    }
    else
    {
        $('.crd').not('.'+value).hide('1000');
        $('.crd').filter('.'+value).show('1000');
    }
})

$('.lg_btn').click(function() {

    event.preventDefault();
    var email = $('.in1').val();
    var pass = $('.in2').val();
    
    if(email != '' && email != ' ' && pass != '' && pass != ' ')
    {
        if(email=="admin@gmail.com" && pass=="123")
        {
            window.location.assign('index.html');
        }
        else
        {
            alert('wrong email or password!');
        }
    }

});
