var fade = 0;
var gameState = -1;
var database;
var playerCount;
var form, game, player;

function setup(){
    createCanvas(800,600);

    database = firebase.database();
    game = new Game();
    form = new Form();
    player = new Player();
}

function draw(){
    if(gameState === -1){
        background(0);
        textFont("courier new");
        textSize(40);
        text("Presented by", 200, 300);
        text("Ojas Bharadwaj", 200, 400);
        if(frameCount > 90){
            gameState++;
        }
    }
    if(gameState == 0){
        background(166, 10, 10);
        textFont("courier new");
        textSize(250);
        fill(0, 255, 221, fade);
        text("MIND", 100,200);
        fill(1, 140, 8, fade);
        text("RACE", 100, 500);
        if(fade <= 255){
            fade += 3;
        }
        else {
            game.matchPlayers();
        }
    }


  
}