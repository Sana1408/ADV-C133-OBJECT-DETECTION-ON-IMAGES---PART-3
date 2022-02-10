img = "";
Status = "";
objects = [];

function preload(){
    img = loadImage("fan.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(Status!= ""){
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y +15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
}

function setup(){
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";

    function modelLoaded(){
        console.log("ModelLoaded!");
        Status = true;
        objectDetector.detect(img, gotResult);
    }
    
    function gotResult(error, results){
       if(error){
            console.error(error);
       }
       console.log(results);
    }
}