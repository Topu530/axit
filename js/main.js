// tab content
$(document).ready(function(){
	$('#conten-1').show();
	$('#conten-2').hide();
	$('#conten-3').hide();

	$('#tab-1').click(function(){
		$('#tab-1').addClass('active');
		$('#tab-2').removeClass('active');
		$('#tab-3').removeClass('active');

		$('#conten-1').show();
		$('#conten-2').hide();
		$('#conten-3').hide();

	});

	$('#tab-2').click(function(){
		$('#tab-1').removeClass('active');
		$('#tab-2').addClass('active');
		$('#tab-3').removeClass('active');

		$('#conten-1').hide();
		$('#conten-2').show();
		$('#conten-3').hide();

	});

	$('#tab-3').click(function(){
		$('#tab-1').removeClass('active');
		$('#tab-2').removeClass('active');
		$('#tab-3').addClass('active');

		$('#conten-1').hide();
		$('#conten-2').hide();
		$('#conten-3').show();

	});

});