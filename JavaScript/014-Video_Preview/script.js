const videoPlayer = document.getElementById("videoPlayer");

console.log("Page loading...")

function playVideo( stoppedVideo ) {
    stoppedVideo.play();
}

function pauseVideo( videoPlaying ) {
    videoPlaying.pause();
    videoPlaying.currentTime = 0;
}

videoPlayer.addEventListener('mouseover', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
    }
});
videoPlayer.addEventListener('mouseout', () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});