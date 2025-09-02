var meuVideo = document.getElementById("player");

function playPause(){
    if(meuVideo.paused)
       meuVideo.play();
    else
    meuVideo.pause();
}