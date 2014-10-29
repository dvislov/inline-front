$(window).resize ->
  if (parseInt($('body').width()) > 660)
    getMetroItemSize(8)
  getMetroItemSize(5)

$(document).ready ->
  if (parseInt($('body').width()) > 660)
    getMetroItemSize(8)
  getMetroItemSize(5)

getMetroItemSize = (num) ->
  boxItemSize = Math.round(parseInt($('.metro-grid-' + num + ' .metro-row').width()) / num - 8)
  $('.metro-grid-' + num + ' .metro-row').css
    height: boxItemSize + 'px'

# stick menu to top
window.onscroll = ->
  if (window.pageYOffset > 204)
    $('.top-nav').addClass('sticky')
  else
    $('.top-nav').removeClass('sticky')

# open top menu
$(document).ready ->
  $('.top-nav-item-link').click ->

    if ($(this).parent('li').hasClass("top-nav-item-active"))
      $(".submenu").removeClass("active")
      $(".top-nav-item-active").removeClass("top-nav-item-active")
    else
      $(".submenu").removeClass("active")
      $(".top-nav-item-active").removeClass("top-nav-item-active")
      $(this).parent('li').toggleClass("top-nav-item-active")
      $(this).next(".submenu").addClass("active")

    return false

# hide menus on body click
$(document).ready ->
  $('body').click ->
    $(".submenu").removeClass("active")
    $(".top-nav-item-active").removeClass("top-nav-item-active")
  $('.top-nav').click ->
    event.stopPropagation()

# hamburger menus
$(document).ready ->
  $('[data-menu="button"]').click ->
    $(this).next('[data-menu="content"]').toggle()
