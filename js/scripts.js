var app = new Vue({
    el: '.home-grid',
    data: {

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
        }
    }
})

$(document).ready(function(){
    $('.home-grid .slide').first().addClass("active");
})

document.addEventListener("turbolinks:load", function() {
  $('h1, h2').addClass('animated fadeIn');
});
