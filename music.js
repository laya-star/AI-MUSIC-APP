song="";
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
scoreLeftWrist=0
function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video,0,0,600,500);
    fill('#dffc03');
    stroke('#dffc03');
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);

        righttWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}
function song_name(){
    if(scoreLeftWrist>0.2){
        circle(leftWristX, leftWristY,20);
        song1.play();
        song2.pause();
        }
        if(scoreRightWrist>0.2){
            circle(rightWristX,rightWristY, 20);
            song2.play();
            song1.pause();
        }
    }