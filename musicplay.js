document.getElementById("audioFile").addEventListener("change", function(audiochoose) {
        var audiofile = audiochoose.target.files[0];
        var audioURL = URL.createObjectURL(audiofile);
        document.getElementById("audio").src = audioURL;
    });//音频上传
    audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime;
        let nowline = lrcArray.findLast(item => item.time <= currentTime);
        console.log(nowline);
        document.getElementById("currentlrc").innerHTML = nowline ? nowline.text : "waiting...";
        document.getElementById("currentlrc2").innerHTML = lrcArraytrans.findLast(item => item.time <= currentTime) ? lrcArraytrans.findLast(item => item.time <= currentTime).text : "";  
    });//歌词同步