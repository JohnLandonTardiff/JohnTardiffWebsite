var modal = document.getElementById("imgExpand");

var img = document.getElementsByClassName("expandableImage");
var modalImage = document.getElementById("modalImage");
var caprtionText = document.getElementById("caption");

for(var i = 0; i < img.length; i++) {
    img[i].onclick =  function() {
        modal.style.display = "block";
        modalImage.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}