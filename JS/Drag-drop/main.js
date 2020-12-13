window.onload = function(){
    initHandle('.balls__item');
};

const initHandle = (imgClass) => {
    const img = document.querySelectorAll(imgClass);

    for (let i = 0; i < img.length; i++) {
        img[i].onmousedown = handleDown(event);
    }
};

function handleDown(event){
    console.log(event);
    const item = this;
    const e = event;
    item.ondragstart = function() {
        return false;
    };
    document.body.append(item);
    moveAt(item);
    document.addEventListener('mousemove', onMouseMove);
    item.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        item.onmouseup = null;
    };
}

function moveAt(item) {
    console.log(item);
    item.style.left = event.pageX - item.offsetWidth / 2 + 'px';
    item.style.top = event.pageY - item.offsetHeight / 2 + 'px';
}

function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
}


