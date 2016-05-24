
$(document).ready(function(){
	console.log("This shit is going to rock!");
	
	// Makes Content Editable
	$('.body-text, .mobile').attr("contenteditable","true");

	//displays hidden blocks
	//$('.contentBlock').show();

	//builds menu
	var contentBlocks = $('.contentBlock');
	var menu = $('#menu');
	
	for (var i = 0 ; i < contentBlocks.length ; i++) {
		//console.log(contentBlocks[i]);	

		var blockTitle = $(contentBlocks[i]).find('h3').first().text();

		var blockClass = blockTitle.substring(0,3);

		$(contentBlocks[i]).attr('id', blockClass);

		menu.append('<li>' + blockTitle.toLowerCase() + '</li>');

	}

	//toggle content blocks

	$('#menu li').click(function() {
		
		var itemId = $(this).text().toUpperCase().substring(0,3);
		console.log(itemId);

		$('#'+itemId).toggle();
		$(this).toggleClass('active');

	});
		
	//show block for testing image upload
	var defaultBlocks = [3,8,17,18,19,20];
	var menuItems = $('#menu li');
	for (i = 0; i < defaultBlocks.length ; i++) {
		menuItems[defaultBlocks[i]].click();
	}
	
	//grab path of selected image

	$('#image-upload').change( function(event) {
	    var tmppath = URL.createObjectURL(event.target.files[0]);
	    
	    console.log(tmppath);
		//    $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
		//    $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");

		$(this).parent().next('table').attr('background',tmppath);
		$(this).parent().next('table').attr('style','background-image: url(' + tmppath + ');');
	})


	$('#m02-image-upload').change( function(event) {
	    var tmppath = URL.createObjectURL(event.target.files[0]);
	    
	    console.log(tmppath);
		//    $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
		//    $("#disp_tmp_path").html("Temporary Path(Copy it and try pasting it in browser address bar) --> <strong>["+tmppath+"]</strong>");

		$(this).parent().next('table').find('img').attr('style','background-image: url(' + tmppath + ');');
		$(this).parent().next('table').find('img').attr('src','');
	
	})

});

