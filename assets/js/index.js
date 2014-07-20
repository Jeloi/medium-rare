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
  }
});

/**
 * Menu Show Toggle
 */
 $('#main').waypoint(function(direction) {
    console.log($(window).width());
    if ($(window).width() > 725) {
      $('.topMenu').toggleClass('is-full');
    };
 }, { offset: 37 });
 $('.cover-content').waypoint(function(direction) {
    if ($(window).width() <= 725) {
      $('.topMenu').toggleClass('is-full');
    };
 }, { offset: 37 });

 console.log("got here!");

/**
 * Menu Lines Toggle
 */
$('.linesButton').click(function(event) {
  $(this).toggleClass('is-open')
});


 
});


