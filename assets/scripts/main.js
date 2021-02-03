// main.js

// TODO

let honkButton = document.getElementById("honk-btn");
honkButton.addEventListener("click", playHonk);

let sound = document.getElementById("horn-sound");

let volumeNumber = document.getElementById("volume-number");
volumeNumber.addEventListener("input", changeSlider);

let volumeSlider = document.getElementById("volume-slider");
volumeSlider.addEventListener("input", changeNumber);

let volumeImage = document.getElementById("volume-image");

let soundImage = document.getElementById("sound-image");

let airHorn = document.getElementById("radio-air-horn");
airHorn.addEventListener("input", soundAirHorn);

let carHorn = document.getElementById("radio-car-horn");
carHorn.addEventListener("input", soundCarHorn);

let partyHorn = document.getElementById("radio-party-horn");
partyHorn.addEventListener("input", soundPartyHorn);

function playHonk(event)
{
    event.preventDefault();
    if(volumeNumber.value != "0")
    {
        sound.play();
    }
}

function changeSlider()
{
    volumeSlider.value = volumeNumber.value;
    sound.volume = volumeNumber.value / 100.0;
    if(volumeNumber.value == 0)
    {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }

    if(volumeNumber.value > 0 && volumeNumber.value < 34)
    {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }

    if(volumeNumber.value > 33 && volumeNumber.value < 67)
    {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }

    if(volumeNumber.value > 66)
    {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
}

function changeNumber()
{
    volumeNumber.value = volumeSlider.value;
    sound.volume = volumeSlider.value / 100.0;
    if(volumeNumber.value == 0)
    {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }

    if(volumeNumber.value > 0 && volumeNumber.value < 34)
    {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }

    if(volumeNumber.value > 33 && volumeNumber.value < 67)
    {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }

    if(volumeNumber.value > 66)
    {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
}

function soundAirHorn()
{
    sound.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg"
}

function soundCarHorn()
{
    sound.src = "./assets/media/audio/car-horn.mp3"
    soundImage.src = "./assets/media/images/car.svg"
}

function soundPartyHorn()
{
    sound.src = "./assets/media/audio/party-horn.mp3"
    soundImage.src = "./assets/media/images/party-horn.svg"
}
