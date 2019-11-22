/* For Navbar Background Color on Scroll */
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

/*For Navbar Brand/Logo Size on Scroll*/
window.onscroll = function() {
  growShrinkLogo()
};

function growShrinkLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 5) {
    Logo.style.width = '100px';
  } else {
    Logo.style.width = '150px';
  }
}
