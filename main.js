

difference=0;
leftWristX =0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas =  createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw() {
background('#808080');

document.getElementById("textSize").innerHTML ="Width and height of the text will be"+difference+"px";
fill('#FFA500');
textSize(difference);
text('♛🎃  ѕ𝒶𝐚𝐜ⓗᶤ 𝔰Ĥ𝔸ｒ𝕄α  ♥🏆', 50, 400);
stroke('#010100');
}

function modelLoaded(){
    console.log('Posenet Is Initialized');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    

   
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("leftWristX ="+leftWristX+"rightWristX ="+rightWristX+"difference ="+difference);
        
    }
}