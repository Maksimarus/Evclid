window.addEventListener('DOMContentLoaded', function() {
	// burger
	document.querySelector('#burger').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active');
		document.querySelector('#burger').classList.toggle('burger-is-active');
		document.querySelector('#burger').classList.toggle('line-burger-active');
	})

	// Tabs
	document.querySelectorAll('.tabs_btn').forEach(function (tabsBtn) {
		tabsBtn.addEventListener('click', function (event) {
			const path = event.currentTarget.dataset.path;
			document.querySelectorAll('.tab-content').forEach(function(tabContent) {
				tabContent.classList.remove('tab-content-active');
			})
			document.querySelector(`[data-target = "${path}"]`).classList.add('tab-content-active')
		})
	})
})

// swiper
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

//  accordion
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