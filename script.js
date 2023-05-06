$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scrollupbutn').addClass("show");
        }else{
            $('.scrollupbutn').removeClass("show");
        }
    });
    // slide-up script
    $('.scrollupbutn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menubutn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menubutn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["CSE Undergraduate", "Competitive Programmer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Competitive Programmer", "Web developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
//yooooo
const elements = document.getElementsByClassName('alpha');

        for (let i = 0; i<=elements.length; i++)
        {
            elements[i].addEventListener('animationend',function(e){
                elements[i].classList.remove('animated');
            });

            elements[i].addEventListener('mouseover',function(e){
                elements[i].classList.add('animated')
            })
        }     
        //what should i do next huh  ??????
