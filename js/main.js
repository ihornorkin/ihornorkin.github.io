//Форма отправки 2.0 //
$(function() {
  $('.button-send').click(function() {
    var message = $('.message').html;
    $('.message-input').attr(value, message);
  });
  $("[name=send]").click(function () {
    $(":input.error").removeClass('error');
    $(".allert").remove();

    var error;
    var btn = $(this);
    var ref = btn.closest('form').find('[required]');
    var msg = btn.closest('form').find('input');
    var send_btn = btn.closest('form').find('[name=send]');
    var send_options = btn.closest('form').find('[name=campaign_token]');

    $(ref).each(function() {
      if ($(this).val() == '') {
        var errorfield = $(this);
        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Required field</span></div>');
        error = 1;
        $(":input.error:first").focus();
        return;
      } else {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($(this).attr("type") == 'email') {
          if(!pattern.test($(this).val())) {
            $("[name=email]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Input correct e-mail</span></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
      }
    });
    if(!(error==1)) {
      $(send_btn).each(function() {
        $(this).attr('disabled', true);
      });
      $(send_options).each(function() {
        if ($(this).val() == '') {
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: msg,
            success: function() {
              setTimeout(function(){ $('form').trigger("reset");
                $("[name=send]").removeAttr("disabled"); }, 1000);
                             //Настройки модального окна после удачной отправки
                             $('.modal').hide();
                             $('.modal-backdrop').hide();
                             $('body').removeClass('modal-open').css('padding', 'inherit');
                             $('#thank').modal('show');
                           },
                           error: function(xhr, str) {
                            alert('Возникла ошибка: ' + xhr.responseCode);
                          }
                        });
        } else {
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: msg,
            success:
            $.ajax({
              type: 'POST',
              url: 'https://app.getresponse.com/add_subscriber.html',
              data: msg,
              statusCode: {0:function() {
                setTimeout(function(){ $('form').trigger("reset");
                  $("[name=send]").removeAttr("disabled"); }, 1000);
                                    // Настройки модального окна после удачной отправки
                                    $('.modal').hide();
                                    $('.modal-backdrop').hide();
                                    $('body').removeClass('modal-open').css('padding', 'inherit');
                                    $('#thank').modal('show');
                                  }}
                                }),
            error:  function(xhr, str) {
              alert('Возникла ошибка: ' + xhr.responseCode);
            }
          });
        }
      });
    }
    return false;
  })
});

/* Entering your JS code here */

$(document).ready(function(){

  new WOW().init();

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

  });

  $('#show-about-me').click(function() {
    $('.hidden-description').slideToggle(400);
    $('.plus').toggleClass('minus');
    ($("#show-content").text() === "Show more") ? $("#show-content").text("Less about me") : $("#show-content").text("Show more");
  });

  function openModal(selector) {
    var modalData = '[data-window="' + selector + '"]';
    var openModal = '#' + selector;
    $(modalData).click(function() {
      $(openModal).addClass('show-works');
      $('body').addClass('open-works');
      setTimeout(function() {
        $(openModal + ' .descope').removeClass('image-animate');
      }, 600);
      setTimeout(function() {
        $(openModal + ' .mobile').removeClass('image-animate');
      }, 640);
      setTimeout(function() {
        $(openModal + ' .tablet').removeClass('image-animate');
      }, 680);
    });
  };

  openModal('portfolio-one');
  openModal('portfolio-two');
  openModal('portfolio-three');
  openModal('portfolio-four');
  openModal('portfolio-five');
  openModal('portfolio-six');

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
