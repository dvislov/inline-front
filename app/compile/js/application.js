(function() {
  var getMetroItemSize;

  $(window).resize(function() {
    if (parseInt($('body').width()) > 660) {
      getMetroItemSize(8);
    }
    return getMetroItemSize(5);
  });

  $(document).ready(function() {
    if (parseInt($('body').width()) > 660) {
      getMetroItemSize(8);
    }
    return getMetroItemSize(5);
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

  $(document).ready(function() {
    $('body').click(function() {
      $(".submenu").removeClass("active");
      return $(".top-nav-item-active").removeClass("top-nav-item-active");
    });
    return $('.top-nav').click(function() {
      return event.stopPropagation();
    });
  });

  $(document).ready(function() {
    return $('[data-menu="button"]').click(function() {
      return $(this).next('[data-menu="content"]').toggle();
    });
  });

}).call(this);
