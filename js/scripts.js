var app = new Vue({
    el: '.home-grid',
    data: {

    },
    methods: {
        nextSlide: function(){
            console.log("nextSlide");
            var active = $('.slide.active');
            active.removeClass('active');
            if (active.is($('.slide').last())){
                console.log('last');
                $('.slide').first().addClass('active');
            }
            else{
                active.next('.slide').addClass('active');
            }
        },
        prevSlide: function(){
            console.log("prevSlide");
            var active = $('.slide.active');
            active.removeClass('active');
            if (active.is($('.slide').first())){
                console.log('first');
                $('.slide').last().addClass('active');
            }
            else{
                active.prev('.slide').addClass('active');
            }
        }
    }
})
