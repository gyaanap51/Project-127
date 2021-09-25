song1 = "";
song2 = "";
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(650,200);
    video = createCapture(VIDEO);

    video.hide();

    
    
}
function draw(){
    image(video, 0, 0, 640, 480);
}
function play_Harry(){
    song1.play();
}
function play_Peter(){
    song2.play();
}
function pause(){
    song2.pause();
    song1.pause()
}
