/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {

    //init wow effects
    new WOW().init();

    //scroll menu
    $(window).scroll(function () {
        var secondFeature = $('#features').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('.sticky-navigation').css({"top": '0px'});
        } else {
            $('.sticky-navigation').css({"top": '-100px'});
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    });

    //Accordion (https://www.w3schools.com/howto/howto_js_accordion.asp)
    var acc=document.getElementsByClassName("accordion");var i;for(i=0;i<acc.length;i+=1){acc[i].addEventListener("click",function(){this.classList.toggle("active");var panel=this.nextElementSibling;if(panel.style.maxHeight){panel.style.maxHeight=null}else{panel.style.maxHeight=panel.scrollHeight+"px"}})}
   
    //Info popup
    window.alert("De ontwikkeling van de Daily Nintendo App zal binnenkort worden stopgezet. Bedankt voor uw interesse!");
 
    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
