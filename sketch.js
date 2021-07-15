const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bts;

var maxLightstick=100;
var lightsticks=[];
var rand;

function preload(){
  bts=loadImage("BTS.jpg");
}

function setup(){
  engine=Engine.create();
  world=engine.world;
  createCanvas(600,600);
}

function draw(){
  Engine.update(engine);
  background(bts);
  rand = Math.round(random(1,2));

  if(frameCount%5===0){
    lightsticks.push(new lightstick(random(0,600),30,30))
  }
  for(var t=0; t<lightsticks.length; t++){
    lightsticks[t].display()
  }
}