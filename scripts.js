$(document).ready(function(){
	console.log("This shit is going to rock!");
	
	// Makes Content Editable
	$('.body-text, .mobile').attr("contenteditable","true");

	//displays hidden blocks
	//$('.contentBlock').show();

	//builds menu
	var contentBlocks = $('.contentBlock');
	var menu = $('#menu');
	
	var blockTitle = $(contentBlocks[0]).find('h2').text();

	for (var i = 0 ; i < contentBlocks.length ; i++) {
		console.log(contentBlocks[i]);	

		var blockTitle = $(contentBlocks[i]).find('h3').first().text();

		var blockClass = blockTitle.substring(0,3	);

		$(contentBlocks[i]).attr('id', blockClass);

		

		menu.append('<li>' + blockTitle + '</li>');



	}

	//toggle content blocks

	$('#menu li').click(function() {
		
		var itemId = $(this).text().substring(0,3)
		console.log(itemId);

		var contentBlocks = $('.contentBlock');

		$('#'+itemId).toggle();
		$(this).toggleClass('active');

	});
	


});

