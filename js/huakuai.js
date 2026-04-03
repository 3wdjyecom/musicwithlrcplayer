const switchBtn = document.getElementById('musicSwitch');
  const statusText = document.getElementById('status');
// ✅ 改为获取所有 hidden-div 元素（返回数组）
const hiddenDivs = document.querySelectorAll('.hidden-div');

// 同步所有隐藏div的状态
function syncSwitchStatus() {
  if (switchBtn.checked) {
    statusText.textContent = '纯净模式：开启';
    // 遍历所有 hidden-div，统一设置显示/隐藏
    hiddenDivs.forEach(div => {
      div.style.display = 'none'; 
    });
    
  } else {
    statusText.textContent = '纯净模式：关闭';
    hiddenDivs.forEach(div => {
      div.style.display = 'block'; 
    });
    
  }
}
// 页面加载时同步初始状态
syncSwitchStatus();
// 开关切换时同步
switchBtn.addEventListener('change', syncSwitchStatus);