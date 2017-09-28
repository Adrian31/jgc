//Empty

var bodyCheck = function(){
  console.log(document.body.clientWidth);
  if (document.body.clientWidth > 650) {
    console.log("hello");
      $('#menu2').removeClass('open2');
    }
}

bodyCheck();

new ResizeSensor(jQuery(document.body.clientWidth), function(){
    console.log('content dimension changed');
});
