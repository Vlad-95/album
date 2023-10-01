function anchor() {
  $('a[href^="#"]').on('click', function () {
    let anchor = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(anchor).offset().top - 200,
      },
      600
    ); // #5
  });
}

export { anchor };
