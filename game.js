import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, snakeLength} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currTime){
    if (gameOver) {
        if (confirm(`You lose(skore: ${snakeLength()}) press ok to restart the game`)) {
            window.location.reload()
        }
        return;
    }
    window.requestAnimationFrame(main);
    
    const secondsSinceLastRender =(currTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED)return;
    
    update();
    draw();
    
    lastRenderTime = currTime;
    //console.log('render');
}

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);