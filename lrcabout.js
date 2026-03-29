    var lrcArray = [];
    var lrcArraytrans = [];
    var lrcouttime = "";
    document.getElementById("lrcfile").addEventListener("change", function(lrcchoose) {
        const lrcfile = lrcchoose.target.files[0];
        const reader = new FileReader();
        reader.readAsText(lrcfile);
        reader.onload = function(readlrc) 
        {
        var time = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
        var lrcText = readlrc.target.result;
        
        var lines = lrcText.split("\n");
        
        var result = [];
        for (let line of lines) 
        { 
            let match = line.match(time);
            let text = line.replace(time, "").trimEnd();
            
            if (match) {
            // 把时间和歌词一起存进数组
                result.push({
                time: parseInt(match[1])*60 + parseInt(match[2]) + parseInt(match[3])/1000,
                text: line.replace(time, "").trimEnd()
                });
            }
        }
        lrcArray = result;
        let lyricTexts = result.map(item => item.text);
        lrcouttime = lyricTexts.join("\n");
        document.getElementById("lrcContent").innerHTML = lyricTexts.join("<br>");
        } 
    });//lrc解析


     document.getElementById("trans").addEventListener("change", function(lrcchoose) {
        const translation = lrcchoose.target.files[0];
        const reader = new FileReader();
        reader.readAsText(translation);
        reader.onload = function(readlrc) 
        {
        var time = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
        var translationText = readlrc.target.result;
        var translationLines = translationText.split("\n");
        var result1 = [];
        for (let line of translationLines) 
        { 
            let match = line.match(time);
            let text = line.replace(time, "").trimEnd();
            
            if (match) {
            // 把时间和歌词一起存进数组
                result1.push({
                time: parseInt(match[1])*60 + parseInt(match[2]) + parseInt(match[3])/1000,
                text: line.replace(time, "").trimEnd()
                });
            }
        }
        lrcArraytrans = result1;
        let lyrictrans = result1.map(item => item.text);
        document.getElementById("lrcContent2").innerHTML = lyrictrans.join("<br>");
        } 
    });//lrc翻译解析
        
    function downloadLrc() {
                config = lrcouttime;
                var blob = new Blob([config], { type: "text/plain;charset=utf-8" });
                var link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "lyrics.lrc";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                    
    }//歌词下载