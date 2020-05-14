$(function() {

  "use strict";

  /*===============================================
    Preloaders
  ===============================================*/
  var $body = $("body");

  $(window).on("load", function () {
    $body.addClass("loaded");
  });

  if ($body.attr("data-preloader") === "1") {
    $body.append($("<div class='preloader preloader-1'><div><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "2") {
    $body.append($("<div class='preloader preloader-2'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div></div>"));
  }
  else if ($body.attr("data-preloader") === "3") {
    $body.append($("<div class='preloader preloader-3'><div><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "4") {
    $body.append($("<div class='preloader preloader-4'><div><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "5") {
    $body.append($("<div class='preloader preloader-5'><div><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "6") {
    $body.append($("<div class='preloader preloader-6'><div><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "7") {
    $body.append($("<div class='preloader preloader-7'><div><span></span><span></span><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "8") {
    $body.append($("<div class='preloader preloader-8'><div><span></span><span></span><span></span><span></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "9") {
    $body.append($("<div class='preloader preloader-9'><div><span class='spinner-box'><span></span><span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "10") {
    $body.append($("<div class='preloader preloader-10'><div><h6 class='heading-uppercase'>Loading</h6><span class='spinner'></span></div></div>"));
  }
  else if ($body.attr("data-preloader") === "11") {
    $body.append($("<div class='preloader preloader-11'><div><span class='spinner'><span></div></div>"));
  }


  /*===============================================
    Navbar Menu
  ===============================================*/
  var nav = $(".nav");
  var navToggle = $(".nav-toggle-btn");

  //
  // Show Nav menu on Toggle //
  //
  navToggle.on("click", function(e) {
    var d = $(".nav-dropdown");
    var s = $(".sub-dropdown");
    var dMenu = $(".dropdown-menu");
    var sMenu = $(".sub-dropdown-menu");

    if (nav.hasClass("nav-show")) {
      nav.removeClass("nav-show");
      if (dMenu.hasClass("dropdown-menu-show")) {
        dMenu.removeClass("dropdown-menu-show");
        d.removeClass("dropdown-minus");
      }
      if (sMenu.hasClass("sub-dropdown-menu-show")) {
        sMenu.removeClass("sub-dropdown-menu-show");
        s.removeClass("sub-dropdown-minus");
      }
    }
    else {
      nav.addClass("nav-show");
    }
    e.stopPropagation();
  });

  //
  // Transform Navicon into X //
  //
  navToggle.on("click", function() {
    if (navToggle.hasClass("nav-toggle-close")) {
      navToggle.removeClass("nav-toggle-close");
    }
    else {
      navToggle.addClass("nav-toggle-close");
    }
  });

  //
  // Navbar Dropdown //
  //
  var dropdownBtn = $(".nav-dropdown .nav-link");
  var subDropdownBtn = $(".sub-dropdown a");

  dropdownBtn.on("click", function() {
    var d = $(this).parent(".nav-dropdown").children(".dropdown-menu");
    if (d.hasClass("dropdown-menu-show")) {
      d.removeClass("dropdown-menu-show");
    }
    else {
      d.addClass("dropdown-menu-show");
    }
  });

  subDropdownBtn.on("click", function(e) {
    var s = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");

    if (s.hasClass("sub-dropdown-menu-show"))  {
      s.removeClass("sub-dropdown-menu-show");
    }
    else {
      s.addClass("sub-dropdown-menu-show");
    }
    e.stopPropagation();
  });

  //
  // Transform Plus into Minus //
  //
  dropdownBtn.on("click", function() {
    var m = $(this).parent(".nav-dropdown").children(".dropdown-menu");
    var d = $(this).parent(".nav-dropdown");

    if (m.hasClass("dropdown-menu-show")) {
      d.addClass("dropdown-minus");
    }
    else {
      d.removeClass("dropdown-minus");
    }
  });

  subDropdownBtn.on("click", function() {
    var m = $(this).parent(".sub-dropdown").children(".sub-dropdown-menu");
    var s = $(this).parent(".sub-dropdown");

    if (m.hasClass("sub-dropdown-menu-show")) {
      s.addClass("sub-dropdown-minus");
    }
    else {
      s.removeClass("sub-dropdown-minus");
    }
  });

  //
  // Close Nav Menu //
  //
  $(document).on("click", function(e) {
    if ( $(e.target).closest(".nav").length === 0 ) {
      if (nav.hasClass("nav-show")) {
        var d = $(".dropdown-menu");
        var s = $(".sub-dropdown-menu");

        nav.removeClass("nav-show");
        if (d.hasClass("dropdown-menu-show")) {
          d.removeClass("dropdown-menu-show");
          $(".nav-dropdown").removeClass("dropdown-minus");
        }
        if (s.hasClass("sub-dropdown-menu-show")) {
          s.removeClass("sub-dropdown-menu-show");
          $(".sub-dropdown").removeClass("sub-dropdown-minus");
        }
      }
      if (navToggle.hasClass("nav-toggle-close")) {
        navToggle.removeClass("nav-toggle-close");
      }
    }
  });

  //
  // Prevent content jumping to top on click(href='#') //
  //
  $(".navbar a[href='#']").on("click", function(e) {
    e.preventDefault();
  });

  //
  // Position Toggle Button to the left if Nav is aligned left //
  //
  if (nav.hasClass("mr-auto")) {
    navToggle.addClass("left");
  }

  //
  // Sticky Navbar //
  //
  if ($(".navbar-sticky").length) {
    var navbarSticky = $(".navbar-sticky");
    var navbarOffset = navbarSticky.offset().top;

    $(window).on("scroll", function() {
      var navbarPlaceholder = $(".navbar-placeholder");

      if ($(window).scrollTop() >= navbarOffset) {
        navbarSticky.addClass("navbar-sticky-apply");
        navbarPlaceholder.addClass("navbar-placeholder-padding");
      }
      else {
        navbarSticky.removeClass("navbar-sticky-apply");
        navbarPlaceholder.removeClass("navbar-placeholder-padding");
      }

      if ($(window).scrollTop() >= navbarOffset + 20) {
        navbarSticky.addClass("navbar-shrink");
      }
      else {
        navbarSticky.removeClass("navbar-shrink");
      }
    });
    // Navbar Sticky Placeholder
    $("<div class='navbar-placeholder'></div>").insertAfter(".navbar-sticky");
  }


  /*===============================================
    Fullscreen Toggle Menu
  ===============================================*/
  var toggleMenu = $(".fullscreen-menu");
  var toggleBtn = $(".fullscreen-toggle-btn");

  //
  // Show Menu on Toggle //
  //
  toggleBtn.on("click", function(e) {
    if (toggleMenu.hasClass("fullscreen-menu-show")) {
      toggleMenu.removeClass("fullscreen-menu-show");
    }
    else {
      toggleMenu.addClass("fullscreen-menu-show");
    }
    e.stopPropagation();
  });

  //
  // Hide Toggle button //
  //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("fullscreen-toggle-hide")) {
      toggleBtn.removeClass("fullscreen-toggle-hide");
    }
    else {
      toggleBtn.addClass("fullscreen-toggle-hide");
    }
  });

  //
  // Close Toggle menu //
  //
  $(document).on("click", function() {
    if (toggleMenu.hasClass("fullscreen-menu-show")) {
      toggleMenu.removeClass("fullscreen-menu-show");
      toggleBtn.removeClass("fullscreen-toggle-hide");
    }
  });


  /*===============================================
    Mega Menu
  ===============================================*/
  var megaMenuToggle = $(".nav-megadropdown");

  megaMenuToggle.on("click", function() {
    var m = $(this).children(".mega-menu");
    var l = $(this).children(".nav-link");
    if (m.hasClass("mega-menu-show")) {
      m.removeClass("mega-menu-show");
      l.removeClass("nav-link-minus");
    }
    else {
      m.addClass("mega-menu-show");
      l.addClass("nav-link-minus");
    }
  });

  //
  // Close Mega Menu //
  //
  var megaMenu = $(".mega-menu");

  navToggle.on("click", function() {
    if (megaMenu.hasClass("mega-menu-show")) {
      megaMenu.removeClass("mega-menu-show");
      $(".nav-link").removeClass("nav-link-minus");
    }
  });

  $(document).on("click", function(e) {
    if ( $(e.target).closest(".nav").length === 0 ) {
      if (megaMenu.hasClass("mega-menu-show")) {
        megaMenu.removeClass("mega-menu-show");
        $(".nav-link").removeClass("nav-link-minus");
      }
    }
  });


  /*===============================================
    Sidebar Menu
  ===============================================*/
  var sidebarDropdownLink = $(".sidebar-dropdown-link");

  sidebarDropdownLink.on("click", function() {
    var sidebarDropdownMenu = $(this).parent().children(".sidebar-dropdown");
    var $this = $(this);

    if (sidebarDropdownMenu.hasClass("sidebar-dropdown-show")) {
      sidebarDropdownMenu.removeClass("sidebar-dropdown-show");
      $this.removeClass("minus");
    }
    else {
      sidebarDropdownMenu.addClass("sidebar-dropdown-show");
      $this.addClass("minus");
    }
  });

  var sidebarToggle = $(".sidebar-nav-toggle");
  var sidebarNavContent = $(".sidebar-nav-content");

  sidebarToggle.on("click", function() {
    if (sidebarToggle.hasClass("sidebar-nav-toggle-close")) {
      sidebarToggle.removeClass("sidebar-nav-toggle-close");
      sidebarNavContent.removeClass("sidebar-nav-show");
    }
    else {
      sidebarToggle.addClass("sidebar-nav-toggle-close");
      sidebarNavContent.addClass("sidebar-nav-show");
    }
  });

  //
  // Prevent content jumping to top on click(href='#') //
  //
  $(".sidebar-menu a[href='#']").on("click", function(e) {
    e.preventDefault();
  });


  /*===============================================
    Search Form
  ===============================================*/
  var searchWrapper = $(".search-wrapper");
  var searchToggle = $(".search-toggle");

  //
  // Show Nav menu when Toggle button clicked //
  //
  searchToggle.on("click", function(e) {
    if (searchWrapper.hasClass("search-wrapper-show")) {
      searchWrapper.removeClass("search-wrapper-show");
    }
    else {
      searchWrapper.addClass("search-wrapper-show");
    }
    e.stopPropagation();
  });

  $(document).on("click", function(e) {
    if ( $(e.target).closest(".search-wrapper div[class^='col-']").length === 0 ) {
      if (searchWrapper.hasClass("search-wrapper-show")) {
        searchWrapper.removeClass("search-wrapper-show");
      }
    }
  });


  /*===============================================
    Shrink Navbar when starts scrolling
  ===============================================*/
  var navbarFixed = $(".navbar-fixed");

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 10) {
      navbarFixed.addClass("navbar-shrink");
    } else {
      navbarFixed.removeClass("navbar-shrink");
    }
  });


  /*===============================================
    Smooth Scrollin on links
  ===============================================*/
  var htmlBody = $("html,body");
  var ssBtn = $(".scrolldown-btn, .scrolldown, .navbar a");

  ssBtn.on("click", function(e) {
    htmlBody.animate({scrollTop: $(this.hash).offset().top}, 700, "easeInOutQuart");
    e.preventDefault();
  });


  /*===============================================
    Scroll to top button
  ===============================================*/
  var scrollTopBtn = $(".scrolltotop");
  //
  // Show/Hide button //
  //
  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 700) { // 700px from top
      scrollTopBtn.addClass("scrolltotop-show");
    }
    else {
      scrollTopBtn.removeClass("scrolltotop-show");
    }
  });

  //
  // Animate button //
  //
  scrollTopBtn.on("click", function(){
    htmlBody.animate({scrollTop : 0}, 600, "easeInOutQuart");
    return false;
  });
  

  /*===============================================
    Portfolio
  ===============================================*/
  $(".portfolio-wrapper").imagesLoaded( function() {
    var $portfolioWrapper = $(".portfolio-wrapper").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 300 // 0.3s in milliseconds
    });
    var filter = $(".filter ul li");

    // Portfolio Filter //
    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });


  /*===============================================
    Portfolio with Infinite Scroll
  ===============================================*/
  var $portfolioInfinite = $(".portfolio-infinite").isotope({
    itemSelector: "none",
    masonry: {
      columnWidth: ".portfolio-item",
    },
    stagger: 20,
  });

  // Initial items reveal
  $portfolioInfinite.imagesLoaded( function() {
    $portfolioInfinite.isotope( "option", { itemSelector: ".portfolio-item" });

    var $items = $portfolioInfinite.find(".portfolio-item");
    $portfolioInfinite.isotope( "appended", $items );
  });

  // Get Isotope instance
  var iso = $portfolioInfinite.data('isotope');

  $portfolioInfinite.infiniteScroll({
    path: "Page-{{#}}.html", // Loads Page-2.html, Page-3.html etc
    append: ".portfolio-item",
    outlayer: iso,
    button: ".view-more-button",
    scrollThreshold: false,
    status: ".infinite-scroll-status",
  });


  /*===============================================
    Owl Carousel Sliders
  ===============================================*/
  $(".owl-carousel").each( function() {
    var $carousel = $(this);

    var $defaults = {
      rewind: true,
      navText: ["<i class='ti-angle-left'></i>","<i class='ti-angle-right'></i>"],
      autoHeight: true, 
      autoplayTimeout: 4000,
      autoplayHoverPause: true
    }

    var $options = {
      items: $carousel.data("owl-items"),
      margin: $carousel.data("owl-margin"),
      loop: $carousel.data("owl-loop"),
      center: $carousel.data("owl-center"),
      mouseDrag: $carousel.data("owl-mouseDrag"),
      touchDrag: $carousel.data("owl-touchDrag"),
      pullDrag: $carousel.data("owl-pullDrag"),
      freeDrag: $carousel.data("owl-freeDrag"),
      stagePadding: $carousel.data("owl-stagePadding"),
      autoWidth: $carousel.data("owl-autoWidth"),
      startPosition: $carousel.data("owl-startPosition"),
      URLhashListener: $carousel.data("owl-URLhashListener"),
      nav: $carousel.data("owl-nav"),
      rewind: $carousel.data("owl-rewind"),
      navElement: $carousel.data("owl-navElement"),
      slideBy: $carousel.data("owl-slideBy"),
      dots: $carousel.data("owl-dots"),
      dotsEach: $carousel.data("owl-dotsEach"),
      autoplay: $carousel.data("owl-autoplay"),
      autoplayTimeout: $carousel.data("owl-autoplayTimeout"),
      smartSpeed: $carousel.data("owl-smartSpeed"),
      fluidSpeed: $carousel.data("owl-fluidSpeed"),
      autoplaySpeed: $carousel.data("owl-autoplaySpeed"),
      navSpeed: $carousel.data("owl-navSpeed"),
      dotsSpeed: $carousel.data("owl-dotsSpeed"),
      dragEndSpeed: $carousel.data("owl-dragEndSpeed"),
      callback: $carousel.data("owl-callback"),
      video: $carousel.data("owl-video"),
      videoHeight: $carousel.data("owl-videoHeight"),
      videoWidth: $carousel.data("owl-videoWidth"),
      itemElement: $carousel.data("owl-itemElement"),
      stageElement: $carousel.data("owl-stageElement"),
      navContainer: $carousel.data("owl-navContainer"),
      dotsContainer: $carousel.data("owl-dotsContainer")
    }

    var $responsive = {
      responsive: {
        0 : {
          items: $carousel.data("owl-xs")
        },
        // breakpoint from 576px+
        576 : {
          items: $carousel.data("owl-sm")
        },
        // breakpoint from 768px+
        768 : {
          items: $carousel.data("owl-md")
        },
        // breakpoint from 992px+
        992 : {
          items: $carousel.data("owl-lg")
        },
        // breakpoint from 1200px+
        1200 : {
          items: $carousel.data("owl-xl")
        }
      }
    }

    $carousel.owlCarousel( $.extend( $defaults, $options, $responsive) );
  });

  //
  // Home Portfolio Carousel navigation //
  //
  var homePortfolioPrev = $("#homePortfolioPrev");
  var homePortfolioNext = $("#homePortfolioNext");

  homePortfolioNext.on("click", function(){
    $("#homePortfolioSlider").trigger("next.owl.carousel", [300]);
  });
  homePortfolioPrev.on("click", function(){
    $("#homePortfolioSlider").trigger("prev.owl.carousel", [300]);
  });


  /*===============================================
    Blog Masonry
  ===============================================*/
  $(".blog-masonry").masonry({
    itemSelector: '.blog-post-box'
  });
  

  /*===============================================
    Magnific Popup
  ===============================================*/
  //
  // Lightbox - Single Image //
  //
  $(".lightbox-image").each(function () {
    $(this).magnificPopup({
      type: 'image',
      fixedContentPos: false,
      removalDelay: 200,
      closeOnContentClick: true, 
      image: {
        titleSrc: 'data-image-title'
      }
    });
  });

  //
  // Lightbox - Gallery //
  //
  $(".gallery-wrapper").each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
          enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });

  //
  // Lightbox - Youtube video //
  //
  var popupYoutube = $(".popup-youtube");
  var youtubeSrc = popupYoutube.attr("data-youtube-src");

  popupYoutube.magnificPopup({
    items: { src: youtubeSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: "v=",
          src: youtubeSrc
        }
      },
      srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });

  //
  // Lightbox - Vimeo video //
  //
	
// gactive//
	
  var popupVimeo = $(".popup-vimeo1");
  var vimeoSrc = popupVimeo.attr("data-vimeo1-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/279567825?autoplay=1'
        }
      },
    }
  });
	
// dove //
	
  var popupVimeo = $(".popup-vimeo2");
  var vimeoSrc = popupVimeo.attr("data-vimeo2-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/311771852?autoplay=1'
        }
      },
    }
  });
	
// nivea //
	
  var popupVimeo = $(".popup-vimeo3");
  var vimeoSrc = popupVimeo.attr("data-vimeo3-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/311765429?autoplay=1'
        }
      },
    }
  });
	
// movistar play //
	
  var popupVimeo = $(".popup-vimeo4");
  var vimeoSrc = popupVimeo.attr("data-vimeo4-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/310790964?autoplay=1'
        }
      },
    }
  });
	
//olx 720//
	
  var popupVimeo = $(".popup-vimeo5");
  var vimeoSrc = popupVimeo.attr("data-vimeo5-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/262051143?autoplay=1'
        }
      },
    }
  });
	
// rialto //
	
var popupVimeo = $(".popup-vimeo");
  var vimeoSrc = popupVimeo.attr("data-vimeo-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/311766139?autoplay=1'
        }
      },
    }
  });
	
// big cola //
	
	var popupVimeo = $(".popup-vimeo7");
  var vimeoSrc = popupVimeo.attr("data-vimeo7-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/289517760?autoplay=1'
        }
      },
    }
  });

//--------------------------------------------------------	//
	//movistar hermano del medio//
	
  var popupVimeo = $(".popup-vimeo8");
  var vimeoSrc = popupVimeo.attr("data-vimeo8-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/368133906?autoplay=1'
        }
      },
    }
  });	
	
	//banco santa fe//
	
  var popupVimeo = $(".popup-vimeo9");
  var vimeoSrc = popupVimeo.attr("data-vimeo9-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/368134105?autoplay=1'
        }
      },
    }
  });	
		
	//movistar galaxia//
	
  var popupVimeo = $(".popup-vimeo11");
  var vimeoSrc = popupVimeo.attr("data-vimeo11-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/368134235?autoplay=1'
        }
      },
    }
  });
		
	//movistar unificados//
	
  var popupVimeo = $(".popup-vimeo25");
  var vimeoSrc = popupVimeo.attr("data-vimeo25-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/368134571?autoplay=1'
        }
      },
    }
  });
		
	//ypf gato//
	
  var popupVimeo = $(".popup-vimeo26");
  var vimeoSrc = popupVimeo.attr("data-vimeo26-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/368134799?autoplay=1'
        }
      },
    }
  });
		
	//Tigo TLQTM//
	
  var popupVimeo = $(".popup-vimeo27");
  var vimeoSrc = popupVimeo.attr("data-vimeo27-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/368135124?autoplay=1'
        }
      },
    }
  });	
//--------------------------------------------------------	//

	
	
	
	//chandon//
	
		var popupVimeo = $(".popup-vimeo12");
  var vimeoSrc = popupVimeo.attr("data-vimeo12-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312596092?autoplay=1'
        }
      },
    }
  });
	
	//jw peru//
	
  var popupVimeo = $(".popup-vimeo13");
  var vimeoSrc = popupVimeo.attr("data-vimeo13-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312596176?autoplay=1'
        }
      },
    }
  });
	
	//poett//
	
  var popupVimeo = $(".popup-vimeo14");
  var vimeoSrc = popupVimeo.attr("data-vimeo14-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312596946?autoplay=1'
        }
      },
    }
  });
	
	//levis//
	
  var popupVimeo = $(".popup-vimeo15");
  var vimeoSrc = popupVimeo.attr("data-vimeo15-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312596860?autoplay=1'
        }
      },
    }
  });
	
	//zona jobs//
	
  var popupVimeo = $(".popup-vimeo16");
  var vimeoSrc = popupVimeo.attr("data-vimeo16-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312597026?autoplay=1'
        }
      },
    }
  });
	
	//hola futuro//
	
  var popupVimeo = $(".popup-vimeo17");
  var vimeoSrc = popupVimeo.attr("data-vimeo17-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312596138?autoplay=1'
        }
      },
    }
  });
	
	//harina ya//
	
  var popupVimeo = $(".popup-vimeo18");
  var vimeoSrc = popupVimeo.attr("data-vimeo18-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/271117704?autoplay=1'
        }
      },
    }
  });
	
	// cnt navidad //
	
  var popupVimeo = $(".popup-vimeo19");
  var vimeoSrc = popupVimeo.attr("data-vimeo19-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/306836730?autoplay=1'
        }
      },
    }
  });
	
	//subway//
	
  var popupVimeo = $(".popup-vimeo20");
  var vimeoSrc = popupVimeo.attr("data-vimeo20-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312600865?autoplay=1'
        }
      },
    }
  });
	
	//BBVA 1//
	
  var popupVimeo = $(".popup-vimeo21");
  var vimeoSrc = popupVimeo.attr("data-vimeo21-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/277721893?autoplay=1'
        }
      },
    }
  });
	
	//FALABELLA//
	
  var popupVimeo = $(".popup-vimeo22");
  var vimeoSrc = popupVimeo.attr("data-vimeo22-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/260328390?autoplay=1'
        }
      },
    }
  });
	
	// TIGO //
	
  var popupVimeo = $(".popup-vimeo23");
  var vimeoSrc = popupVimeo.attr("data-vimeo23-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312601346?autoplay=1'
        }
      },
    }
  });
	
	// MANICHO //
	
  var popupVimeo = $(".popup-vimeo24");
  var vimeoSrc = popupVimeo.attr("data-vimeo24-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/259357019?autoplay=1'
        }
      },
    }
  });
	

	
	// discover //
	
	var popupVimeo = $(".popup-vimeo28");
  var vimeoSrc = popupVimeo.attr("data-vimeo28-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/187025045?autoplay=1'
        }
      },
    }
  });
	
	// finesse //
	
	var popupVimeo = $(".popup-vimeo29");
  var vimeoSrc = popupVimeo.attr("data-vimeo29-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/225445816?autoplay=1'
        }
      },
    }
  });
	
	// citibanamex //
	
  var popupVimeo = $(".popup-vimeo30");
  var vimeoSrc = popupVimeo.attr("data-vimeo30-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312607619?autoplay=1'
        }
      },
    }
  });
	
  // PINGUINO //
	
  var popupVimeo = $(".popup-vimeo31");
  var vimeoSrc = popupVimeo.attr("data-vimeo31-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/253999401?autoplay=1'
        }
      },
    }
  });
	
	//ACTILIFE//
	
  var popupVimeo = $(".popup-vimeo32");
  var vimeoSrc = popupVimeo.attr("data-vimeo32-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312608893?autoplay=1'
        }
      },
    }
  });
	
	// COOLTEA //
	
  var popupVimeo = $(".popup-vimeo33");
  var vimeoSrc = popupVimeo.attr("data-vimeo33-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312608574?autoplay=1'
        }
      },
    }
  });
	
	// WL WISKY //
	
  var popupVimeo = $(".popup-vimeo34");
  var vimeoSrc = popupVimeo.attr("data-vimeo34-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312608237?autoplay=1'
        }
      },
    }
  });
	
  //
	
  var popupVimeo = $(".popup-vimeo35");
  var vimeoSrc = popupVimeo.attr("data-vimeo35-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312610161?autoplay=1'
        }
      },
    }
  });
	
  //tabletop//
	
  var popupVimeo = $(".popup-vimeo36");
  var vimeoSrc = popupVimeo.attr("data-vimeo36-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/125696347?autoplay=1'
        }
      },
    }
  });
	
	// reel post //
	
  var popupVimeo = $(".popup-vimeo37");
  var vimeoSrc = popupVimeo.attr("data-vimeo37-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/121487525?autoplay=1'
        }
      },
    }
  });
	
	// DINERS BOOTIQUE //
	
  var popupVimeo = $(".popup-vimeo38");
  var vimeoSrc = popupVimeo.attr("data-vimeo38-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/312748526?autoplay=1'
        }
      },
    }
  });
	
	// PINGUINO CASERO //
	
  var popupVimeo = $(".popup-vimeo39");
  var vimeoSrc = popupVimeo.attr("data-vimeo39-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/253999401?autoplay=1'
        }
      },
    }
  });
	
	//bayer aspirina//
	
  var popupVimeo = $(".popup-vimeo40");
  var vimeoSrc = popupVimeo.attr("data-vimeo40-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/325758459?autoplay=1'
        }
      },
    }
  });
	
		//properati//
	
  var popupVimeo = $(".popup-vimeo41");
  var vimeoSrc = popupVimeo.attr("data-vimeo41-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/321855335?autoplay=1'
        }
      },
    }
  });
	
		//har//
	
  var popupVimeo = $(".popup-vimeo42");
  var vimeoSrc = popupVimeo.attr("data-vimeo42-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/322017232?autoplay=1'
        }
      },
    }
  });
	
	//movistar brand conexion//
	
  var popupVimeo = $(".popup-vimeo43");
  var vimeoSrc = popupVimeo.attr("data-vimeo43-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/327104990?autoplay=1'
        }
      },
    }
  });
	
	//diners contacless magia//
	
  var popupVimeo = $(".popup-vimeo44");
  var vimeoSrc = popupVimeo.attr("data-vimeo44-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/336139228?autoplay=1'
        }
      },
    }
  });
	
		//chevrolet camiones//
	
  var popupVimeo = $(".popup-vimeo45");
  var vimeoSrc = popupVimeo.attr("data-vimeo45-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/339999042?autoplay=1'
        }
      },
    }
  });
			//cfn la pareja ideal//
	
  var popupVimeo = $(".popup-vimeo46");
  var vimeoSrc = popupVimeo.attr("data-vimeo46-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/338027924?autoplay=1'
        }
      },
    }
  });
	
				//Amor de madres//
	
  var popupVimeo = $(".popup-vimeo47");
  var vimeoSrc = popupVimeo.attr("data-vimeo47-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/342126057?autoplay=1'
        }
      },
    }
  });
	
				//burguer king//
	
  var popupVimeo = $(".popup-vimeo48");
  var vimeoSrc = popupVimeo.attr("data-vimeo48-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/342126103?autoplay=1'
        }
      },
    }
  });
	
	
				//arcor//
	
  var popupVimeo = $(".popup-vimeo49");
  var vimeoSrc = popupVimeo.attr("data-vimeo49-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/342126278?autoplay=1'
        }
      },
    }
  });
	
	
				//lapiz de platino//
	
  var popupVimeo = $(".popup-vimeo50");
  var vimeoSrc = popupVimeo.attr("data-vimeo50-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/342126374?autoplay=1'
        }
      },
    }
  });
	
	
				//personal  fibertel//
	
  var popupVimeo = $(".popup-vimeo51");
  var vimeoSrc = popupVimeo.attr("data-vimeo51-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/342326186?autoplay=1'
        }
      },
    }
  });
	
	
				//loteria el niño//
	
  var popupVimeo = $(".popup-vimeo52");
  var vimeoSrc = popupVimeo.attr("data-vimeo52-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/342126477?autoplay=1'
        }
      },
    }
  });
	
				//itau//
	
  var popupVimeo = $(".popup-vimeo53");
  var vimeoSrc = popupVimeo.attr("data-vimeo53-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/355990885?autoplay=1'
        }
      },
    }
  });
	
				//greco//
	
  var popupVimeo = $(".popup-vimeo54");
  var vimeoSrc = popupVimeo.attr("data-vimeo54-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/355991795?autoplay=1'
        }
      },
    }
  });	
	
				//burguer king//
	
  var popupVimeo = $(".popup-vimeo55");
  var vimeoSrc = popupVimeo.attr("data-vimeo55-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/355991855?autoplay=1'
        }
      },
    }
  });	
	
				//acindar//
	
  var popupVimeo = $(".popup-vimeo56");
  var vimeoSrc = popupVimeo.attr("data-vimeo56-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/355992346?autoplay=1'
        }
      },
    }
  });
	
					//burguer king//
	
  var popupVimeo = $(".popup-vimeo57");
  var vimeoSrc = popupVimeo.attr("data-vimeo57-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/355990480?autoplay=1'
        }
      },
    }
  });

						//Cinemark//
	
  var popupVimeo = $(".popup-vimeo58");
  var vimeoSrc = popupVimeo.attr("data-vimeo58-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/355992877?autoplay=1'
        }
      },
    }
  });
	
	
						//gm vas para adelante//
	
  var popupVimeo = $(".popup-vimeo59");
  var vimeoSrc = popupVimeo.attr("data-vimeo59-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/356753055?autoplay=1'
        }
      },
    }
  });
	
	
			//toyota hilux//
	
  var popupVimeo = $(".popup-vimeo60");
  var vimeoSrc = popupVimeo.attr("data-vimeo60-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/356755209?autoplay=1'
        }
      },
    }
  });
	
			//Jeep papa//
	
  var popupVimeo = $(".popup-vimeo61");
  var vimeoSrc = popupVimeo.attr("data-vimeo61-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/356753292?autoplay=1'
        }
      },
    }
  });


			//rexona champions//
	
  var popupVimeo = $(".popup-vimeo62");
  var vimeoSrc = popupVimeo.attr("data-vimeo62-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/356755500?autoplay=1'
        }
      },
    }
  });
	
	
	//ford ranger//
	
  var popupVimeo = $(".popup-vimeo63");
  var vimeoSrc = popupVimeo.attr("data-vimeo63-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/356755662?autoplay=1'
        }
      },
    }
  });
	
	//colnatur//
	
  var popupVimeo = $(".popup-vimeo64");
  var vimeoSrc = popupVimeo.attr("data-vimeo64-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/354230281?autoplay=1'
        }
      },
    }
  });
	
	//svelty//
	
  var popupVimeo = $(".popup-vimeo65");
  var vimeoSrc = popupVimeo.attr("data-vimeo65-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/354011200?autoplay=1'
        }
      },
    }
  });
	
	//svelty//
	
  var popupVimeo = $(".popup-vimeo66");
  var vimeoSrc = popupVimeo.attr("data-vimeo66-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          src: 'https://player.vimeo.com/video/374940597?autoplay=1'
        }
      },
    }
  });
	
	
	
	
	
//==============================fin codio videos==============================//
	
	
  /*===============================================
    Parallax
  ===============================================*/
  $(".parallax").jarallax({
    speed: 0.2
  });


  /*===============================================
    Countdown
  ===============================================*/
  //
  // Countdown - Legacy style //
  //
  $(".countdown").each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime(''
        + '<div><h2 class="font-light">%D</h2><h6 class="heading-uppercase">Days</h6></div>'
        + '<div><h2 class="font-light">%H</h2><h6 class="heading-uppercase">Hours</h6></div>'
        + '<div><h2 class="font-light">%M</h2><h6 class="heading-uppercase">Minutes</h6></div>'
        + '<div><h2 class="font-light">%S</h2><h6 class="heading-uppercase">Seconds</h6></div>'));
    });
  });

  //
  // Countdown - Basic style //
  //
  $(".countdown-basic").each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime('%D days %H:%M:%S'));
    });
  });


  /*===============================================
    Accordion
  ===============================================*/
  var accordionTitle = $(".accordion-title");

  accordionTitle.on("click", function() {
    var accordionList = $(this).parent("li");
    var accordionContent = this.nextElementSibling;

    if (accordionList.hasClass("active")) {
      accordionList.removeClass("active");
      accordionContent.style.maxHeight = null;
    }
    else {
      accordionList.addClass("active");
      if ($(this).closest(".accordion").hasClass("accordion-oneopen")) {
        $(this).closest(".accordion").children("li").removeClass("active");
        accordionList.addClass("active");
        $(".accordion-oneopen > li > .accordion-content").css("max-height", "0");
      }
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });

  //
  // Give max-height to Accordion's active content //
  //
  if ($(".accordion li").hasClass("active")) {
    var accordionActiveContent = $(".accordion > li.active > .accordion-content");
    var accordionHeight = accordionActiveContent.prop("scrollHeight");
    
    accordionActiveContent.css({'max-height': accordionHeight + "px"});
  }

  
  /*===============================================
    Fun Facts Counter
  ===============================================*/
  $(".facts-wrapper").appear(function() {

    var fcounter = $(".facts-counter");

    fcounter.each(function () {
      $(this).prop("Counter",0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: "swing",
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });

  },{accX: 0, accY: -10});


  /*===============================================
    Quantity
  ===============================================*/
  $(".product-quantity .button-circle").on("click", function() {
    var $qBtn = $(this);
    var oldVal = $qBtn.parent().find("input").val();

    if ($(this).hasClass("inc")) {
      var newVal = parseFloat(oldVal) + 1;
    }
    else {
      // Don't allow decrementing below one
      if (oldVal > 1) {
        var newVal = parseFloat(oldVal) - 1;
      }
      else {
        newVal = 1;
      }
    }

    $qBtn.parent().find("input").val(newVal);
  });


  /*===============================================
    Returning Customer Login
  ===============================================*/
  //
  // Login //
  //
  var loginBtn = $(".return-login-btn");

  loginBtn.on("click", function() {
    var l = $(".return-login");

    if (l.hasClass("return-login-show")) {
      l.removeClass("return-login-show");
    }
    else {
      l.addClass("return-login-show");
    }
  });

  //
  // Create Account //
  //
  var createAccountToggle = $(".create-account-toggle input");

  createAccountToggle.on("click", function() {
    var c = $(".create-account-box");
    
    if (createAccountToggle.is(":checked")) {
      c.addClass("create-account-box-show");
    }
    else {
      c.removeClass("create-account-box-show");
    }
  });


  /*===============================================
    Popover
  ===============================================*/
  $('[data-toggle="popover"]').popover();


  /*===============================================
    Tooltip
  ===============================================*/
  $('[data-toggle="tooltip"]').tooltip();


  /*===============================================
    Google Maps
  ===============================================*/
  var mapCanvas = $("#map-canvas");

  if (mapCanvas.length) {
    var initLatitude = mapCanvas.attr("data-latitude");
    var initLongitude = mapCanvas.attr("data-longitude");

    var map = new GMaps({
      el: "#map-canvas",
      lat: initLatitude,
      lng: initLongitude,
      zoom: 16,
      scrollwheel: false
    });
    
    map.addMarker({
      lat : initLatitude,
      lng : initLongitude
    });
  }


  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on("submit", function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    if (name === "") {
      $("#name").addClass("error-color");
    }
    if (email === "") {
      $("#email").addClass("error-color");
    }
    if (subject === "") {
      $("#subject").addClass("error-color");
    }
    if (message === "") {
      $("#message").addClass("error-color");
    }

    else {
      $.ajax({
        url:"../../assets/php/contact-form.php",
        data:$(this).serialize(),
        type:"POST",
        success:function(data){
          $("#success").addClass("show-result"); //=== Show Success Message==
          $("#contactform").each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").addClass("show-result"); //===Show Error Message====
        }
      });
      var forms = $("#contactform input, #contactform textarea");
      forms.removeClass("error-color");
    }

    e.preventDefault();
  });

});