document.getElementById("audioFile").addEventListener("change", function(audiochoose) {
        var audiofile = audiochoose.target.files[0];
        var audioURL = URL.createObjectURL(audiofile);
        document.getElementById("audio").src = audioURL;
        console.log("正在播放：" + audiofile.name);
        console.log("绫地宁宁可爱捏");
    });//音频上传
    audio.addEventListener("timeupdate", function() {
        var currentTime = audio.currentTime;
        let nowline = lrcArray.findLast(item => item.time <= currentTime);
        document.getElementById("currentlrc").innerHTML = nowline ? nowline.text : "waiting...";
        document.getElementById("currentlrc2").innerHTML = lrcArraytrans.findLast(item => item.time <= currentTime) ? lrcArraytrans.findLast(item => item.time <= currentTime).text : "";  
    });//歌词同步
     document.getElementById('fontColor').addEventListener('input', function() {
        var color = this.value;
        document.getElementById('currentlrc').style.textShadow = `0 0 5px ${color}`;
    });
    document.getElementById('tfontColor').addEventListener('input', function() {
        var color = this.value;
        document.getElementById('currentlrc2').style.textShadow = `0 0 5px ${color}`;
    });