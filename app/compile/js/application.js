(function() {
  var getMetroItemSize;

  $(window).resize(function() {
    getMetroItemSize(5);
    return getMetroItemSize(8);
  });

  $(document).ready(function() {
    getMetroItemSize(5);
    return getMetroItemSize(8);
  });

  getMetroItemSize = function(num) {
    var boxItemSize;
    boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 8);
    return $('.metro-grid-' + num + ' .metro-row').css({
      height: boxItemSize + 'px'
    });
  };

  window.onscroll = function() {
    if (window.pageYOffset > 204) {
      return $('.top-nav').addClass('sticky');
    } else {
      return $('.top-nav').removeClass('sticky');
    }
  };

  $(document).ready(function() {
    return $('.top-nav-item-link').click(function() {
      if ($(this).parent('li').hasClass("top-nav-item-active")) {
        $(".submenu").removeClass("active");
        return $(".top-nav-item-active").removeClass("top-nav-item-active");
      } else {
        $(".submenu").removeClass("active");
        $(".top-nav-item-active").removeClass("top-nav-item-active");
        $(this).parent('li').toggleClass("top-nav-item-active");
        return $(this).next(".submenu").addClass("active");
      }
    });
  });

}).call(this);
