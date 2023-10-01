const toTop = () => {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.to-top').fadeIn();
    } else {
      $('.to-top').fadeOut();
    }
  });
  $('.to-top').on('click', function () {
    $('html, body').animate({
      scrollTop: 0,
    });
  });
};

export default toTop;
