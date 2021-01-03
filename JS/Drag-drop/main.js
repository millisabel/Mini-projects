window.onload = function(){
    initBalls('.balls', 'img/ball.png', 544, 544, 30);
};

function initBalls(boxClass, imgSrc, imgWidth, imgHeight, imgNewWidth){
    let parentForBalls = document.querySelector(boxClass);
    let countBalls = Math.floor(parentForBalls.offsetWidth/imgNewWidth);
    let deg = 360*Math.random();

    for (let i = 0; i < countBalls; i++) {
        createBalls(parentForBalls, imgSrc, imgWidth, imgHeight, deg);
        deg += 30;
    }
}

function createBalls(parent, imgSrc, imgWidth, imgHeight, deg){
    let ball = document.createElement('img');

    ball.src = imgSrc;
    ball.classList.add('balls__item');
    ball.alt ='ball';
    ball.width = imgWidth;
    ball.height = imgHeight;
    ball.style = `-webkit-filter: hue-rotate(${deg}deg);filter: hue-rotate(${deg}deg);` ;
    ball.style = `filter: hue-rotate(${deg}deg);filter: hue-rotate(${deg}deg);` ;
    parent.append(ball);

    handleForBall(ball);
}

function handleForBall(ball){
    const message = document.querySelector('.message');

    ball.ondragstart = function() {
        return false;
    };

    ball.onmousedown = () => {
        let shiftX = event.clientX - ball.getBoundingClientRect().left;
        let shiftY = event.clientY - ball.getBoundingClientRect().top;

        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
        document.body.append(ball);

        moveAt(event.pageX, event.pageY);

        document.addEventListener('mousemove', onMouseMove);

        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
        };

        function onMouseMove(event) {
            // const tree = document.querySelector('.tree>img');
            moveAt(event.pageX, event.pageY);

            // ball.hidden = true;
            // let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            // ball.hidden = false;
            //
            // if (!elemBelow) return;
            //
            // let droppableBelow = elemBelow.closest('.tree');
            //
            // if (droppableBelow) {
            //     tree.style.background = 'red';
            // }
            // else{
            //     tree.style.background = 'transparent';
            // }
        }

        function moveAt(pageX, pageY) {
            ball.style.left = pageX - shiftX + 'px';
            ball.style.top = pageY - shiftY + 'px';
        }
    };
}



