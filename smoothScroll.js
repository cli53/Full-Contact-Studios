$(function () {
                 $('a[href="#hero1"], a[href="#hero3"], a[href="#info"], a[href="#hero2"], a[href="#hero4"], a[href="#hero5"], a[href="#profileimg"]').click(
                     function () {
                         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                             location.hostname == this.hostname) {
                             var target = $(this.hash);
                             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                             if (target.length) {
                                 $('html, body').animate({
                                     scrollTop: target.offset().top
                                 }, 1000);
                                 return false;
                             }
                         }
                     });
             });
