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

$( function() {
   $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
   $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
 } );

/*window.onload = function() {
document.getElementById("showPDF").onclick = function() {
    document.getElementById("thePDF").style.visibility = "visible";
}
}*/
