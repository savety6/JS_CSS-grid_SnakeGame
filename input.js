let inputDirection = { x: 0, y:0};
let lastInputDirection = { x:0, y:0};
let startingX, startingY, movingX, movingY;
window.addEventListener('touchstart', (evt) => {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
})
window.addEventListener('touchmove', (evt) => {
    movingX = evt.touches[0].clientX;
    movingY = evt.touches[0].clientY;
})
window.addEventListener('touchend', (evt) => {
    if(startingX + 100 < movingX) {
        if (lastInputDirection.x !== 0) return;
            inputDirection = {x:1, y:0};
    }
    else if(startingX - 100 > movingX) {
        if (lastInputDirection.x !== 0) return;
            inputDirection = {x:-1, y:0};
    }

    if (startingY + 100 < movingY) {
        if (lastInputDirection.y !== 0) return;
            inputDirection = {x:0, y:1};
    }
    else if(startingY - 100 > movingY) {
        if (lastInputDirection.y !== 0) return;
            inputDirection = {x:0, y:-1};
    }
})

window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y:-1};
            break;
        case 'w':
            if (lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y:-1};
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y:1};
            break;
        case 's':
            if (lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y:1};
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break;
            inputDirection = {x:-1, y:0};
            break;
        case 'a':
            if (lastInputDirection.x !== 0) break;
            inputDirection = {x:-1, y:0};
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break;
            inputDirection = {x:1, y:0};
            break;
        case 'd':
            if (lastInputDirection.x !== 0) break;
            inputDirection = {x:1, y:0};
            break;
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}