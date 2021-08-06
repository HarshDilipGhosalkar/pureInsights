  /**
   * Initiate Products lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Product details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 330,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // }
  });
