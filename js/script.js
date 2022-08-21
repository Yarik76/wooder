$('.left-menu-btn').on('click', function (e) {
    e.preventDefualt;
    $(this).toggleClass('left-menu-btn_active');    
    $('.left-menu-hidden').toggleClass('left-menu-hidden_active');
    $('body').toggleClass('lock');
});


$('.watch_video').on('click', function (e) {
    e.preventDefualt;  
    this.textContent = this.textContent == 'WATCH VIDEO' ? 'CLOSE VIDEO' : 'WATCH VIDEO';
    $('.sec4_block4').toggleClass('sec4_block4_active');
});


$('.right-menu-info').on('click', function () {
    alert ('This site is about things that are made from the wood')
});



$(window).scroll(function() {
    if($(".menu-nav").offset().top > 640){
        $(".menu-nav").css("background-color", "black");
    } else {
        $(".menu-nav").css("background-color", "rgb(0,0,0,0.5)");
    };
});
