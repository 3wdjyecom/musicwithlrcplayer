var audio = document.getElementById('audio');
var playBtn = document.getElementById('playBtn');
var progress = document.getElementById('progressBar');
var totalEl = document.getElementById('totalTime');
var currentEl = document.getElementById('currenttime');
var audiio = document.getElementById('audioFile');
var volumeBar = document.getElementById('volumeBar');

volumeBar.oninput = function() {
  audio.volume = volumeBar.value / 100;
  
  if (audio.volume === 0) {
    silence1.textContent = '🔇';
  }else{
    silence1.textContent = '🔊';
  }
};
let isMuted = false;
function silence(){
  
  if(isMuted === false){
    audio.volume = 0;
    silence1.textContent = '🔇';
    
    isMuted = true;
  }
  else{
    audio.volume = volumeBar.value / 100;
    silence1.textContent = '🔊';
    isMuted = false;
  }
}

audio.onloadedmetadata = function() {
  let total = formatTime(audio.duration);
  document.getElementById("totalTime").innerText = total;
};


audio.ontimeupdate = function() {
  let current = formatTime(audio.currentTime);
  document.getElementById("currentTime").innerText = current;
};


function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + (s < 10 ? "0" + s : s);
}

playBtn.onclick = () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = '⏸';
  }else{
    audio.pause();
    playBtn.textContent = '▶';
  }
};


audio.ontimeupdate = () => {
  if (!isNaN(audio.duration)) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent;
    currentEl.textContent = formatTime(audio.currentTime);
    
  }
};
progressBar.onclick = (e) => {
  const pos = e.offsetX / progressBar.offsetWidth;
  audio.currentTime = pos * audio.duration;
};