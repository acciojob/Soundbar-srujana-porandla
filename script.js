//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    const audioPlayer = document.getElementById('audio-player');
    let currentAudio = null;

   
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const soundFile = button.getAttribute('data-sound');

            // Stop any currently playing sound
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }

           
            const audio = new Audio(`sounds/${soundFile}`);
            audio.play();
            currentAudio = audio;
        });
    });

    
    stopButton.addEventListener('click', function() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    });
});


