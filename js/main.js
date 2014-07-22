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

// add class to animate the mainCard out of place
// homeMenuItem.onClick(homeMenuItem.className += homeMenuItem.className ? ' outOfPlace' : 'outOfPlace');
// healthMenuItem.onClick(healthMenuItem.className += healthMenuItem.className ? ' outOfPlace' : 'outOfPlace');
// journalMenuItem.onClick(journalMenuItem.className += journalMenuItem.className ? ' outOfPlace' : 'outOfPlace');
// aboutMenuItem.onClick(aboutMenuItem.className += aboutMenuItem.className ? ' outOfPlace' : 'outOfPlace');
// folioMenuItem.onClick(folioMenuItem.className += folioMenuItem.className ? ' outOfPlace' : 'outOfPlace');

// fetch JSON
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

// Request the file and execute a callback with the parsed result once it is available
fetchJSONFile('http://zachariahmoreno.com/api/get_recent_posts/', function(data){
    // do something with your data
    console.log(data);

    function logArrayElements(element, index, array) {
		console.log("a[" + index + "] = " + element);
	}

    data.posts.forEach(logArrayElements)
});