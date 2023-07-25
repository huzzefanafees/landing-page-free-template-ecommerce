const multipleItemCarousel = document.querySelector('#carouselExampleControls');
if(window.matchMedia("(min-width:992px)").matches){
    const carousel = new bootstrap.Carousel(multipleItemCarousel,{
        interval: false
    })
    var carouselWidth = $('.carousel-inner1')[0].scrollWidth;
    var cardWidth = $('.carousel-items1').width();

    var scrollPosition = 0;

    $('.carousel-control-next1').on('click', function(){
        if(scrollPosition<(carouselWidth-(cardWidth * 4))){
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner1').animate({scrollLeft:scrollPosition},600);
        }
    });
    $('.carousel-control-prev1').on('click', function(){
        if(scrollPosition > 0){
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner1').animate({scrollLeft:scrollPosition},600);
        }
    });
}else {
    $(multipleItemCarousel).addClass('slide');
}