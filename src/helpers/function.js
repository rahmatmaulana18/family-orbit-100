export const setLocalStorage = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
   return JSON.parse(localStorage.getItem(key));
};

export const playAudio = (id, volume = 1) => {
   const audio = document.getElementById(id);

   if (audio) {
      adjustAudioVolume(volume);
      stopAudio(id);
      audio.play();
   }
};

export const stopAudio = (id) => {
   const audio = document.getElementById(id);

   if (audio) {
      audio.pause();
      audio.currentTime = 0;
   }
};

export const adjustAudioVolume = (id, volume) => {
   const audio = document.getElementById(id);

   if (audio) {
      audio.volume = volume;
   }
};