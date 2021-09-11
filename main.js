
noseX=0;
noseY=0;

function setup() {
canvas=createCanvas(550,500);
canvas.center();
video = createCapture(VIDEO);
video.size(550,500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {
console.log("posenet is initialized");
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x-35;
    noseY = results[0].pose.nose.y-35;
} 
}

function preload() {
clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function draw() {
image(video, 0,0,550,500);
image(clown_nose,noseX,noseY,60,40);
}



function take_snapshot() {
    save('myfilterimage.png');
}