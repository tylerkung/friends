var menuApp = new Vue({
    el: '.nav',
    data: {
        menuOpen: false
    },
})

var homeApp = new Vue({
    el: '.home-grid',
    data:{
        sliderTime: 6000,
        interval: '',
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
            clearInterval(this.interval);
            this.timerSet();
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
            clearInterval(this.interval);
            this.timerSet();
        },
        timerSet: function(){
            this.interval = setInterval(function(){
                homeApp.nextSlide();
            }.bind(this), this.sliderTime);
        }
    },
    mounted: function(){
        this.timerSet()
    }
})

function loadAnimations(){
    var controller = new ScrollMagic.Controller({});

    $('.animate').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this,
        })
        .setClassToggle(this, 'reveal')
        // .addIndicators()
        .offset(-80)
        .reverse(false)
        .addTo(controller);
    });

    $('.img-caption.animate').each(function(){
        new ScrollMagic.Scene({
            triggerElement: this,
        })
        .setClassToggle(this, 'reveal')
        // .addIndicators()
        .offset(-400)
        .reverse(false)
        .addTo(controller);
    })
}

$(document).ready(function(){
    $('.home-grid .slide').first().addClass("active");
    $('.nav .menu .menu-button').click(function(){
        $('body').toggleClass('menu-open');
    });

    loadAnimations();
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
