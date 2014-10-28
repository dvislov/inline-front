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
    console.log(boxItemSize);
    return $('.metro-grid-' + num + ' .metro-row').css({
      height: boxItemSize + 'px'
    });
  };

}).call(this);
