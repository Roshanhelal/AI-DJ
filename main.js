var song=""; 
var left_wrist_X=0;
var left_wrist_Y=0;
var right_wrist_X=0;
var right_wrist_Y=0;
function preload(){
    song=loadSound("music.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();        

  
    

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotpose);
}

function draw(){
    image (video,0,0,600,500);

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded(){
    console.log("Model is loaded");

}
function gotpose(results){
if(results.length>0)
{
    console.log(results);
    left_wrist_X=results[0].pose.leftWrist.x;
    left_wrist_Y=results[0].pose.leftWrist.y;
    console.log("left Wrist x="+left_wrist_X+"left wrist y="+left_wrist_Y);
    right_wrist_X=results[0].pose.rightWrist.x;
    right_wrist_Y=results[0].pose.rightWrist.y;
    console.log("right Wrist x="+right_wrist_X+"right wrist y="+right_wrist_Y);
}

}