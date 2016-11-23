// One cat name****************************************************below




var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats/1')
.done(function (data) {
	var cat1 = ajax.responseText;
	var catOne = jQuery.parseJSON(cat1);
	var $listItem = $('#cats').append("<li>"+catOne.name+"</li>");
	console.log(catOne.name);

});


// One cat name**************************************************above

// whole cat list************************************************below
var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
.done(function (data) {

var objList = jQuery.parseJSON(ajax.responseText);

for(i=0; i<objList.length; i++) {
	console.log(objList[i]);
	
}

});