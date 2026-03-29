document.getElementById('audioFile').addEventListener('change', function(getouthere) {
        var fileinput = getouthere.target.files[0];
        jsmediatags.read(fileinput, {
            onSuccess: ({ tags }) => {
            console.log('标题:', tags.title);
            console.log('艺术家:', tags.artist);
            console.log('专辑:', tags.album);
            var artist = tags.artist || '未知艺术家';
            var title = tags.title || '未知标题';
            var album = tags.album || '未知专辑';
            var picture = tags.picture;
            document.getElementById('title').textContent = title;
            document.getElementById('artist').textContent = artist;
            document.getElementById('album').textContent = album;
            document.title = `正在播放：${title} - ${artist}` || '音乐播放器';
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
            