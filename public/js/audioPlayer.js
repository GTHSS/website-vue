export function playAudio(src) {
    try {
        const audioObject = new Audio(src);
        audioObject.loop = true;
        audioObject.volume = 1;
        audioObject.preload = "auto";
        audioObject.play(); // If not played
        return true;
    } catch {
        return false;
    }
}