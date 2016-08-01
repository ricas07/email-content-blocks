
$(document).ready(function(){
	console.log("This shit is going to rock!");
	
	// Makes Content Editable
	$('.body-text, .mobile').attr("contenteditable","true");

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
		$('#'+itemId).toggle();
		$(this).toggleClass('active');
	});
		
	//set template blocks
	var menuItems = $('#blocks li');
	var template = getQuerystring("template");	
	var activeBlocks = [];

	if (template) {

		switch (template) {
			case "bonus":
				activeBlocks = [1,5,7];		
			break;
			case "promotion":
				activeBlocks = [1,8];			
			break;
			case "newsletter":
				activeBlocks = [1,5,8,10,16];			
			break;
			case "otp":
				activeBlocks = [1,8,10,13,14,15];			
			break;
			case "special":
				activeBlocks = [1,7];
			break;

			default:
				activeBlocks;

		}

		if (activeBlocks != '') {
			$('#'+template).addClass('active');
			activeBlocks.push(17,18,19,20);

			
			for (i = 0; i < activeBlocks.length ; i++) {
				menuItems[activeBlocks[i]].click();
			}
		}

	} else {
		for (i = 0; i < menuItems.length ; i++) {
			$(menuItems[i]).click();
			//menuItems[i].click();
		}
	}
	
	//set brand

	var brand = getQuerystring("brand");

	if (brand) {
		$('body').addClass(brand);
		$('#'+brand).addClass('active');
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
		$('.menu, #menu-container h2, #menu-container > a').toggle();	
	});
	
	
	var newTemplate;

	$('#templates li').click(function(){
		newTemplate = setTemplate($(this).attr('id'),brand);
		window.location = newTemplate;
	});

	$('#brands li').click(function(){
		newTemplate = setTemplate(template,$(this).attr('id'));
		window.location = newTemplate;
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

function setTemplate(name, brand){
	var pageUrl = '?template=' + name;
	if (brand != '') {
		pageUrl += '&brand=' + brand;
	}
	return pageUrl;
}
