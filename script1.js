function makeDraggable(draggable) {
  draggable.onmousedown = function(event) {
    let shiftX = event.clientX - draggable.getBoundingClientRect().left;
    let shiftY = event.clientY - draggable.getBoundingClientRect().top;

    draggable.style.position = "absolute";
    draggable.style.zIndex = 1000;
    document.body.append(draggable);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      draggable.style.left = pageX - shiftX + "px";
      draggable.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    draggable.onmouseup = function() {
      document.removeEventListener("mousemove", onMouseMove);
      draggable.onmouseup = null;
    };
  };

  draggable.ondragstart = function() {
    return false;
  };
}

// Применяем функцию к каждому элементу с классом "movable"
const draggableElements = document.querySelectorAll('.gift');
draggableElements.forEach(element => {
  makeDraggable(element);
});