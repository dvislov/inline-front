$(window).resize ->
  getMetroItemSize(5)
  getMetroItemSize(8)

$(document).ready ->
  getMetroItemSize(5)
  getMetroItemSize(8)

getMetroItemSize = (num) ->
  boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 8)
  console.log(boxItemSize);
  $('.metro-grid-' + num + ' .metro-row').css
    height: boxItemSize + 'px'
