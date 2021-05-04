var canvas, BGImage;
var GameState=0;
var PlayerCount;
var database;
var form,game,player;

function setup(){
canvas = createCanvas(500,500);
database = firebase.database();
game=new Game();
game.getState();
game.start();
}

function draw(){}