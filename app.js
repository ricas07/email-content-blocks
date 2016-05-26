(function(){
	var app = angular.module('contentBlocks', ['ngSanitize']);

	app.controller('blocksController',function(){
		this.name = "Hello";
		this.items = [{ 'id' : 'P01',
			'name': 'Preheader No Logo'},
          { 'id' : 'P02',
			'name': 'Preheader One Logo' },
		  { 'id' : 'P03',
			'name' : 'Preheader Two Logos' },
		  { 'id' : 'P04',
			'name' : 'Combo With Background Image' }, 
		  { 'id' : 'H01',
			'name' : 'Headline Aligned Top' }, 
		  { 'id' : 'H02',
			'name' : 'Headline Aligned Middle' }, 
		  { 'id' : 'H03',
			'name' : 'Headline Aligned Bottom' }, 
		  { 'id' : 'M01',
			'name' : 'Letter' },  
		  { 'id' : 'M02',
			'name' : 'Large Image' }, 
		  { 'id' : 'M03',
			'name' : 'Medium Images Left Aligned' }, 
		  { 'id' : 'M04',
			'name' : 'Medium Images Staggered' },
		  { 'id' : 'M05',
			'name' : 'Small Image Full Width Boxes' }, 
		  { 'id' : 'M06',
			'name' : 'Small Image Half Width Boxes' },
		  { 'id' : 'M07',
			'name' : 'Small Image Cta' },
		  { 'id' : 'M08',
			'name' : 'Icons With Descriptions' },
		  { 'id' : 'M09',
			'name' : 'Cta With Description' },
		  { 'id' : 'M10',
			'name' : 'Standalone Button' },
		  { 'id' : 'S01',
			'name' : 'Social' }, 
		  { 'id' : 'D01',
			'name' : 'Disclaimer' },
		  { 'id' : 'U01',
			'name' : 'Unsubscribe' },
		  { 'id' : 'C01',
			'name' : 'Copyright' }
          ];
    });

	this.viewBlock = function(id){
		items[id] = active;
	};
})(); 