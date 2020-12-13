window.onload = function(){
    setBallscolor('.balls__item');
    initHandle('.balls__item');
};

const setBallscolor = (imgClass) => {
    let deg = 360*Math.random();
    const img = document.querySelectorAll(imgClass);
    for (let i = 0; i < img.length; i++) {
        img[i].style = `-webkit-filter: hue-rotate(${deg}deg);filter: hue-rotate(${deg}deg);` ;
        img[i].style = `filter: hue-rotate(${deg}deg);filter: hue-rotate(${deg}deg);` ;
        deg += 30;
    }
};

const initHandle = (imgClass) => {
    const img = document.querySelectorAll(imgClass);
    const boxForTree = document.querySelector('.tree');

    for (let i = 0; i < img.length; i++) {
        img[i].onmousedown = function(event){
            img[i].ondragstart = function() {
                return false;
            };
            img[i].style.position = 'absolute';
            img[i].style.zIndex = 1000;
            document.body.append(img[i]);
            moveAt(event.pageX, event.pageY);
            document.addEventListener('mousemove', onMouseMove);
            img[i].onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                img[i].onmouseup = null;
                // console.log(img[i]);
            };

            function moveAt(pageX, pageY) {
                img[i].style.left = pageX - img[i].offsetWidth / 2 + 'px';
                img[i].style.top = pageY - img[i].offsetHeight / 2 + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }
        };
    }
};


