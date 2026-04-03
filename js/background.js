var SabTh = document.getElementById('SabTh');
var srbk = document.getElementById('srbk');
var notany = document.getElementById('notany');
var bgchange;
SabTh.onclick = function sabth() {
    clearInterval(bgchange);
    function changeBgImage() {
    const min = 0;
    const max = 5;
    const randomImage = Math.floor(Math.random() * (max - min + 1)) + min;
    document.body.style.backgroundImage = `url('./background/SabbatOfTheWitch/0${randomImage}.jpg')`;
    document.body.style.backgroundSize = 'cover';      
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    };
    changeBgImage();
    let seconds = 5
    bgchange = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            changeBgImage();
            seconds = 10; // 重置秒数
            }
        }, 1000);
    }
srbk.onclick = function srbk() {
    clearInterval(bgchange);
    function changeBgImage() {
    const min = 0;
    const max = 6;
    const randomImage = Math.floor(Math.random() * (max - min + 1)) + min;
    document.body.style.backgroundImage = `url('./background/SANRUNBANKA/0${randomImage}.jpg')`;
    document.body.style.backgroundSize = 'cover';      
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    };
    changeBgImage();
    let seconds = 5
    bgchange = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            changeBgImage();
            seconds = 10; // 重置秒数
            }
        }, 1000);
    }
notany.onclick = function notany() {
    document.body.style.backgroundImage = 'none';
    clearInterval(bgchange);
}
