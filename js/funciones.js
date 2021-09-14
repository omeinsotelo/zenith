$(document).ready(function(){

	

});

$(document).on("scroll", function(){
	var posicionScroll = $( "#content-logo-menu-header-page" ).offset();
console.log(posicionScroll.top);

	if(posicionScroll.top > 70){
		$( "#content-logo-menu-header-page" ).addClass("back-scroll-content-logo-menu-header-page");
	}else{
		$( "#content-logo-menu-header-page" ).removeClass("back-scroll-content-logo-menu-header-page");
	}
});