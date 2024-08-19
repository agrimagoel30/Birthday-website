document.getElementById("openbtn").addEventListener("click", function() {
    document.getElementById("digicard").style.display = "block";
});

document.getElementById("closebtn").addEventListener("click", function() {
    document.getElementById("digicard").style.display = "none";
});




const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showNextImage() {
    const currentImage = images[currentIndex];
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];
    currentImage.classList.remove('active');
    currentImage.classList.add('prev');
    nextImage.classList.remove('prev');
    nextImage.classList.add('active');
    currentIndex = nextIndex;
}
images[currentIndex].classList.add('active');
setInterval(showNextImage, 3000);








document.getElementById("playbtn2").addEventListener("click", function(){
    var audio=document.getElementById("myaudio");

    if(audio.paused){
        audio.play();
        this.textContent="Pause"
    }
    else
    {
        audio.pause()
this.textContent="Play";
    }
});
