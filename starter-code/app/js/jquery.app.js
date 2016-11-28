// One cat name****************************************************below




/*var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats/1')
.done(function (data) {
	var cat1 = ajax.responseText;
	var catOne = jQuery.parseJSON(cat1);
	var $listItem = $('#cats').append("<li>"+catOne.name+"</li>");
	console.log(catOne.name);

});*/


// One cat name**************************************************above

// whole cat list************************************************below
var ajax = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
.done(function (data) {

var objList = jQuery.parseJSON(ajax.responseText);

for(i=0; i<objList.length; i++) {
	var fullList= $('#cats').append("<li>"+objList[i].name+"</li>");
	console.log(objList[i]);

}

});
document.getElementById('submitButton').addEventListener('click',function(){

event.preventDefault();
var catName = document.getElementById("cat-name").value;
var catNote = document.getElementById("cat-note").value;
console.log(catName);
console.log(catNote);

var myCat = new Object()
myCat.name = catName;
myCat.note = catNote;

console.log(myCat);



var catString = JSON.stringify(myCat);
console.log(catString);

// changed Sunday night - created: var postCat and added function putCat to append
var postCat = $.post('https://ga-cat-rescue.herokuapp.com/api/cats', catString, function putCat(){
	$("#cat-name").append(postCat.responseText.name);
	console.log(postCat.responseText);
/* ZEB: Tried (above) with no real success or difference. Went another way (below) and got it to work 
but I'm not sure I got all of the functionality out of the post call this way. It kind of feels like a workaround
for some reason?
*/
$('#cats').append("<li>"+catName+"</li>");

});

});

console.log(catString);