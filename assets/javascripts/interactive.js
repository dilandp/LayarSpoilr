function watchMovie() {
	var popup = "Silahkan Tonton di Bioskop Kesayangan Anda!";
	alert(popup);
};

function readMore() {
	var popup = "Silahkan Cari info lebih lanjut di Google!";
	alert(popup);
};

function checkOnline() {
	if(navigator.onLine) {
		document.getElementById("embed-video").style.display = "block";
		document.getElementById("network-offline").style.display = "none";
	}else{
		document.getElementById("embed-video").style.display = "none";
		document.getElementById("network-offline").style.display = "block";
	}
};

$( function() {

    function checkAttrNav(){
    	// check if navigation has style attribute
	    var navcheck = $("nav").attr('style');
		if (typeof navcheck !== typeof undefined && navcheck !== false) {
			$("nav").removeAttr("class style");
		}else{
			if($("nav").hasClass("close-nav") !== false){
				$("nav").removeAttr("class");
			}else{
				$("nav").show("blind", 500);
			}
		}
    };
	
	// burger menu clicked
	$( "#menu" ).on( "click", function() {
		$("nav").removeClass("close-nav");
		checkAttrNav();
	}); 

	// a navigation clicked
	$( "nav a" ).on( "click", function() {
		$("nav").addClass("close-nav");
		checkAttrNav();		
	}); 

});