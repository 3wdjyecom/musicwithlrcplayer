document.getElementById('audioFile').addEventListener('change', function(getouthere) {
        var fileinput = getouthere.target.files[0];
        jsmediatags.read(fileinput, {
            onSuccess: ({ tags }) => {
            var artist = tags.artist || '未知艺术家';
            var title = tags.title || '未知标题';
            var album = tags.album || '未知专辑';
            var picture = tags.picture;
            audio.onloadedmetadata = function() {
                var duration = audio.duration;
                var hours = Math.floor(duration / 3600);
                var minutes = Math.floor(duration / 60);
                var seconds = Math.floor(duration % 60);
                if (minutes < 10) {
                    minutes = '0' + minutes; 
                }
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                var totalTime = `${minutes}: ${seconds}`;
                document.getElementById('totalTime').textContent = totalTime;
            }
            
            document.getElementById('title').textContent = title;
            document.getElementById('artist').textContent = artist;
            document.getElementById('album').textContent = album;
            
            document.title = `${title}` || '音乐播放器';
            if(picture){
                const blob = new Blob([new Uint8Array(picture.data)], {
                type: picture.format
                });
                const url = URL.createObjectURL(blob);
                document.getElementById('coverImg').src = url;
            }
            
                },
                    onError: (err) => console.error(err)
                });
            });
            