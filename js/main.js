/* Entering your JS code here */

$(document).ready(function(){

 // new WOW().init();

  $("body").on("click",".custome-link", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 600);
  });

  setTimeout(function() {
    $('#welcome').show(1600);
  }, 2000);

  $('document').ready(function () {
    var trigger = $('#hamburger'),
    isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = false;
      } else {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = true;
      }
    }

    $(window).keydown(function() {
      if (event.keyCode == 27) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        $('#cbp-spmenu-s1').removeClass('cbp-spmenu-open');
        isClosed = true;
      }
    });

  });

  $('#show-about-me').click(function() {
    $('.hidden-description').slideToggle(400);
    $('.plus').toggleClass('minus');
    ($("#show-content").text() === "Show more") ? $("#show-content").text("Less about me") : $("#show-content").text("Show more");
  });

  function openModal() {
    $('#portfolio .item').click(function() {
      var selector = '#' + $(this).attr('data-window');
      $(selector).addClass('show-works');
      $('body').addClass('open-works');
      setTimeout(function() {
        $(selector).find('.descope').removeClass('image-animate');
      }, 600);
      setTimeout(function() {
        $(selector).find('.mobile').removeClass('image-animate');
      }, 640);
      setTimeout(function() {
        $(selector).find('.tablet').removeClass('image-animate');
      }, 680);
    });
  }

  openModal();

  /* Close modal */

  $(window).keydown(function(e) {
    if (event.keyCode == 27) {
      $('.about-portfolio').removeClass('show-works');
      $('body').removeClass('open-works');
    }
  });

  $('.close').click(function() {
    $('.about-portfolio').removeClass('show-works');
    $('body').removeClass('open-works');
  });

  $('.nav-link').click(function() {
    $('.nav-link').removeClass('current-menu');
    $(this).addClass('current-menu');
  });

  $('input, textarea').focus(function() {
    $(this).parent().addClass('active-input');
  });

  $('input, textarea').focusout(function() {
    $(this).parent().removeClass('active-input');
  });

});
