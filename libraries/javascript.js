"use strict";

$(document).ready(function(){
    $('#menu').click(function(){
      $('nav li').toggle();
    });

    $('nav li').click(function(){
      var linke = $(this).children('a').attr('href');
        window.location.href=linke;
    });

    $('.ind-slide').cycle({
      fx: 'fade'
    })

});

