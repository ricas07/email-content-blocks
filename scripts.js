
$(document).ready(function(){
	console.log("This shit is going to rock!");
	
	// Makes Content Editable
	$('.body-text, .mobile').attr("contenteditable","true");

	//displays hidden blocks
	//$('.contentBlock').show();

	//builds menu
	var contentBlocks = $('.contentBlock');
	var menu = $('#menu');
	
	/* Old build Menu */
	/*for (var i = 0 ; i < contentBlocks.length ; i++) {
		//console.log(contentBlocks[i]);	

		var blockTitle = $(contentBlocks[i]).find('h3').first().text();

		var blockClass = blockTitle.substring(0,3);

		$(contentBlocks[i]).attr('id', blockClass);

		menu.append('<li>' + blockTitle.toLowerCase() + '</li>');
	} */
	/* End Old build Menu */


	//var escaptedCode = $('.block-code').html();

	//$('.block-code').html(escaptedCode);	

	//console.log(escaptedCode.text);

	//toggle content blocks

	$('#menu li').click(function() {
		
		var itemId = $(this).text().toUpperCase().substring(0,3);
		var itemName = $(this).text();
		// console.log(itemId);
		$(this).toggleClass('active');


		$('#'+itemId).toggle();
			
		//$('#'+itemId).before('<div>').remove();
		$('#'+itemId).before('<div class="visibleBlock"><h3>' + itemName + '</h3></div>');
		
		

		//$('.visibleBlock h3').text(itemName);

	});
		
	//show block for testing image upload
	/*var defaultBlocks = [0,3,8,17,18,19,20];
	var menuItems = $('#menu li');
	for (i = 0; i < defaultBlocks.length ; i++) {
		menuItems[defaultBlocks[i]].click();
	}*/
	
	//grab path of selected image

	$('#image-upload').change( function(event) {
	    var tmppath = URL.createObjectURL(event.target.files[0]);
	    
	    console.log(tmppath);
		$(this).parent().next('table').attr('background',tmppath);
		$(this).parent().next('table').attr('style','background-image: url(' + tmppath + ');');
	})


	$('#m02-image-upload').change( function(event) {
	    var tmppath = URL.createObjectURL(event.target.files[0]);
	    
	    // console.log(tmppath);
		$(this).parent().next('table').find('img').attr('style','background-image: url(' + tmppath + ');');
		$(this).parent().next('table').find('img').attr('src','');
	
	})

});

