
$(document).ready(function(){
	console.log("This shit is going to rock!");
	
	// Makes Content Editable
	$('.body-text, .mobile').attr("contenteditable","true");

	//displays hidden blocks
	//$('.contentBlock').show();

	//builds menu
	var contentBlocks = $('.contentBlock');
	var menu = $('#blocks');
	
	for (var i = 0 ; i < contentBlocks.length ; i++) {
		//console.log(contentBlocks[i]);	

		var blockTitle = $(contentBlocks[i]).find('h3').first().text();

		var blockClass = blockTitle.substring(0,3);

		$(contentBlocks[i]).attr('id', blockClass);

		menu.append('<li>' + blockTitle.toLowerCase() + '</li>');

	}

	//toggle content blocks

	$('#blocks li').click(function() {
		
		var itemId = $(this).text().toUpperCase().substring(0,3);
		console.log(itemId);

		$('#'+itemId).toggle();
		$(this).toggleClass('active');

	});
		
	//show block for testing image upload
	
	var template = getQuerystring("template");
	console.log(template);
	var activeBlocks;

	if (template) {
		if (template == "bonus") {
		activeBlocks = [1,5,7];
		}
		else if (template == "promotion") {
			activeBlocks = [1,8];
		}
		else if (template == "newsletter") {
			activeBlocks = [1,5,8,10,16];
		}
		else if (template == "otp") {
			activeBlocks = [1,8,10,13,14,15];
		}
		else if (template == "letter") {
			activeBlocks = [1,7];
		}
		
		activeBlocks.push(17,18,19,20);
	} 
	

	var menuItems = $('#blocks li');
	for (i = 0; i < activeBlocks.length ; i++) {
		menuItems[activeBlocks[i]].click();
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

	$('#menu-container input').click(function(){
		console.log('CLICK!');
		$('.menu').toggle();	
	});

	

});

function getQuerystring(key) {
    key = String(key).toLowerCase();
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(String(document.location).toLowerCase());
    if (qs == null)
        return "";
    else
        return qs[1];
}
