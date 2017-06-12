<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<script>
	function toggleMobileMenu() 
	{
		var $mobileMenu = $('#mobile-main-menu');	
		$mobileMenu.slideToggle('fast');
	}

	$(document).ready(function() {
		$('#mobile-menu-button').on('click', toggleMobileMenu);
	});
</script>