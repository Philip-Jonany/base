const BG_COLOR = '#231F20';
const TREE_COLOR = '#00FF00';
const PLAYER_COLOR = '#ff0000';

const socket = io('http://localhost:3000');
socket.on('init', handleInit);

const gameScreen = document.getElementById('gameScreen');

let canvas, ctx;

const gameState = {
    player: { 
        pos: {
            x: 3,
            y: 10,
        },
        money: 50,
    },
    tree: {
            x: 10,
            y: 10,
    },
    gridsize: 20
};

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 600;
    ctx.fillstyle = BG_COLOR;
    ctx.fillRect(0,0, canvas.width, canvas.height);

    document.addEventListener('keydown', keydown);
}

function keydown(e) {
    console.log(e.keyCode);
}

init();

function paintGame(state) {
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const tree = state.tree;
    const gridsize = state.gridsize;
    const size = canvas.width / gridsize;

    ctx.fillStyle = TREE_COLOR;
    ctx.fillRect(tree.x * size, tree.y * size, size, size);

    paintPlayer(state.player, size, PLAYER_COLOR);

}

function paintPlayer(playerState, size, color) {
    x = playerState.pos.x;
    y = playerState.pos.y;
    ctx.fillStyle = color           ;
    ctx.fillRect(x * size, y * size, size, size)
}

paintGame(gameState);
console.log("yee");

function handleInit(msg) {
    console.log(msg); 
}