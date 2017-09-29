//Empty
$bottom = $('.bottom');





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}


/*window.onload = function() {
document.getElementById("showPDF").onclick = function() {
    document.getElementById("thePDF").style.visibility = "visible";
}
}*/
