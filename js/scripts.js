var menuApp = new Vue({
    el: '.nav',
    data: {
        menuOpen: false
    },
    methods:{
        activate: function(item){
            console.log(item);
        }
    }
})

var homeApp = new Vue({
    el: '.home-grid',
    data:{},
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
    },
    mounted: function(){
        setInterval(function(){
            homeApp.nextSlide();
        }, 6000);
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
    })
}

$(document).ready(function(){
    $('.home-grid .slide').first().addClass("active");
    $('.nav .menu').click(function(){
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
