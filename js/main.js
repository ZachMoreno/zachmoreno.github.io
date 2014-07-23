// the hoist
var mainCard        = document.getElementById('mainCard'),
	homeMenuItem    = document.getElementById('homeMenuItem'),
	healthMenuItem  = document.getElementById('healthMenuItem'),
	journalMenuItem = document.getElementById('journalMenuItem'),
	aboutMenuItem   = document.getElementById('aboutMenuItem'),
	folioMenuItem   = document.getElementById('folioMenuItem');


// add class to animate the mainCard into place
window.setTimeout(function(){
	mainCard.className += mainCard.className ? ' inPlace' : 'inPlace';
}, 0);


// jQuery(document).ready(function(){
// 	var raw_template = jQuery('#posts-template').html(),
// 		template     = Handlebars.compile(raw_template),
// 		placeHolder  = jQuery("#mainCard");

// 	// Fetch all Blog Posts data from server in JSON
// 	jQuery.get("http://zachariahmoreno.com/api/get_recent_posts/",function(data,status,xhr){
// 		console.log(data);
		
// 		jQuery.each(data,function(index,element){
// 			var html = template(element);
// 			placeHolder.append(html);
// 		});
// 	});
// });


