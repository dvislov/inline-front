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

  window.onscroll = function() {
    if (window.pageYOffset > 204) {
      return $('.top-nav').addClass('sticky');
    } else {
      return $('.top-nav').removeClass('sticky');
    }
  };

  getMetroItemSize = function(num) {
    var boxItemSize;
    boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 8);
    return $('.metro-grid-' + num + ' .metro-row').css({
      height: boxItemSize + 'px'
    });
  };

}).call(this);
