window.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#burger').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active')	
	})
})
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	autoHeight: true,
 
	pagination: {
	  el: '.swiper-pagination',
	},
 
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });
 $( function() {
	var icons = {
      header: null,
      activeHeader: null,
    };
	$( "#accordion" ).accordion({
		collapsible: true,
		heightStyle: "content",
		header: "> div > h3",
		icons: icons,
	})
	$( "#accordion" ).accordion( "option", "icons", null )
		.sortable({
			axis: "y",
			handle: "h3",
			stop: function( event, ui ) {
			ui.item.children( "h3" ).triggerHandler( "focusout" );
			$( this ).accordion( "refresh" );
		 }
	  });
 } );