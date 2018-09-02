var image_onclick = function (event) {
    window.alert('Hello World !');
};
 
var document_onready = function (event) {
    $('#img').on('click', image_onclick);
};
 
$(document).ready(document_onready);

var xhr = new XMLHttpRequest();
xhr.open("GET","/api/photo/list");
xhr.addEventListener("load", function(e){
    var photoList = JSON.parse(xhr.responseText);
    console.log(photoList);
});
xhr.send();
