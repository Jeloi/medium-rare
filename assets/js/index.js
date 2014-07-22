$(function() {
/**
 * Smooth page scroll to an anchor
 * source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
 */
 $('a[href*=#]:not([href=#])').click(function() {
  event.preventDefault();
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 800, "swing");
      return false;
    }
  } else {
    window.location.href = this.href;
  }
});

/**
 * Menu Show Toggle
 */
 $('#main').waypoint(function(direction) {
    if ($(window).width() > 975) {
      $('.topMenu').toggleClass('is-full');
    };
 }, { offset: 37 });
 $('.cover-content').waypoint(function(direction) {
    if ($(window).width() <= 975) {
      $('.topMenu').toggleClass('is-full');
    };
 }, { offset: 37 });
 $('#postHeader-waypoint').waypoint(function (direction) {
   $('.topMenu').toggleClass('is-overImage');
   if ($(window).width() <= 975) {
     $('.topMenu').toggleClass('is-full');
   };
 });

 if ($(window).width() <= 975) {
   $('.topMenu').addClass('is-full');
 };

/**
 * Menu Lines Toggle
 */
$('.linesButton').click(function(event) {
  $(this).toggleClass('is-open');
  $(".topMenu-menu").toggleClass('is-open');
});


 
});


