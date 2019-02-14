var app = new Vue({
    el: '.friends',
    data: {
        menuOpen: false
    },
    methods: {
        nextSlide: function(){
            var active = $('.slide.active');
            active.removeClass('active');
            if (active.is($('.slide').last())){
                $('.slide').first().addClass('active');
            }
            else{
                active.next('.slide').addClass('active');
            }
        },
        prevSlide: function(){
            var active = $('.slide.active');
            active.removeClass('active');
            if (active.is($('.slide').first())){
                $('.slide').last().addClass('active');
            }
            else{
                active.prev('.slide').addClass('active');
            }
        },
        activate: function(item){
            console.log(item);
        }
    }
})

$(document).ready(function(){
    $('.home-grid .slide').first().addClass("active");
    // $('[data-parallax="scroll"]').each(function(){
    //     $(this).parallax({
    //         imageSrc: $(this).attr('data-image-src'),
    //         speed: 0.8
    //     });
    // });
})

// document.addEventListener("turbolinks:click", function() {
//     $('.page-trans').addClass("animate");
// });
//
// document.addEventListener("turbolinks:load", function() {
// $('.page-trans').addClass("animate");
// });
