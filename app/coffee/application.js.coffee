$(window).resize ->
  getMetroItemSize(5)
  getMetroItemSize(8)

$(document).ready ->
  getMetroItemSize(5)
  getMetroItemSize(8)

window.onscroll = ->
  if (window.pageYOffset > 204)
    $('.top-nav').addClass('sticky')
  else
    $('.top-nav').removeClass('sticky')

getMetroItemSize = (num) ->
  boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 8)
  $('.metro-grid-' + num + ' .metro-row').css
    height: boxItemSize + 'px'
