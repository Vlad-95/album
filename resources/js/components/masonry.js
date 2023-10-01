import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const gallery = () => {
  let block = document.querySelector('.js-masonry');

  function msnryInit() {
    let msnry = new Masonry(block, {
      itemSelector: '.gallery__item',
      columnWidth: '.js-masonry-grid-sizer',
      percentPosition: true,
      gutter: '.js-masonry-gutter-sizer',
    });
  }

  let elements = $('img[data-src]');

  function lazyLoad() {
    elements.each(function () {
      let $this = $(this);
      if ($(window).scrollTop() + $(window).height() > $this.offset().top) {
        let src = $this.attr('data-src');
        $this.attr('src', src);

        let imgLoad = imagesLoaded($this);

        imgLoad.on('progress', function (instance, image) {
          let result = image.isLoaded ? 'loaded' : 'broken';

          if (result == 'loaded') {
            $this.parent().removeClass('loading').addClass('loaded');
            msnryInit();
          }
        });
      }
    });
  }
  let init = function () {
    $(window).on('scroll', lazyLoad);
    lazyLoad();
  };

  init();
};

export default gallery;
