let movement = document.getElementsByClassName('iris-group')[0];
var mouseX, mouseY

window.addEventListener('DOMContentLoaded', (event) => {

  document.addEventListener('mousemove', function(event) {
    mouseX = event.screenX;
    mouseY = event.screenY;

    movement.style.transform = "translate(" + mouseX / 7 + "px, " + mouseY / 7 + "px)";
  });

});
