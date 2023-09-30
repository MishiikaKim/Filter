function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    tint_color = "";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
