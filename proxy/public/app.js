$(function() {
var path = window.location.pathname.substr(1);
var nextSlashIndex = path.indexOf('/');
var id = path.substr(0,3);

  function applyWhenElementExists(selector, callback, time) {
    var interval = setInterval(function() {
      if (jQuery(selector).length > 0) {
        callback();
        clearInterval(interval);
      }
    }, time);
  }
 

  $('#placeholder-hero').fadeOut(500, "swing", function () {
	  ReactDOM.render(
	    React.createElement(Hero, {listingId: id || 80}),
	    document.getElementById('hero')
	  )

  })


    ReactDOM.render(
    	React.createElement(ReservationBox, {listingId: id || 1}),
    	document.getElementById('reservation')
  	);

  applyWhenElementExists(".snippet-container", function() {
   var $sidebar   = $("#sidebar"), 
    $window    = $(window),
    offset     = $sidebar.offset(),
    topPadding = 350;

  $window.scroll(function() {
    if ($window.scrollTop() > offset.top && $window.scrollTop() < $("#footer").position().top - 100) {
    $sidebar.stop().animate({
        marginTop: $window.scrollTop() - offset.top + topPadding
    });
  } else if ($window.scrollTop() >= $("#footer").position().top - 100) {
  	$sidebar.stop().animate({
  		marginBottom: 300
  	})
  } else {
    $sidebar.stop().animate({
      marginTop: 40
    });
    }
  });


  applyWhenElementExists(".-hero-hero-1OvWjm-", function(){
  	ReactDOM.render(
	  	React.createElement(Review, {listing_id:  id || 1}), 
	  	document.getElementById('reviews')
	  );

	   	ReactDOM.render(
	  	React.createElement(About, {id: 86, listingId: id || 1}),
	  	document.getElementById('about')
	  );
  }, 50)	
	}, 50);
    


})