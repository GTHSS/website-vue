function play_audio(audio_path) {
    let audio = new Audio(audio_path);
    audio.loop = true;
    audio.play();
}