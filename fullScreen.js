/**
 * 转自http://www.webhek.com/fullscreen/
 */
// 判断各种浏览器，找到正确的方法
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// 启动全屏!
launchFullScreen(document.documentElement); // 整个网页
launchFullScreen(document.getElementById("videoElement")); // 某个页面元素

// 判断浏览器种类
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// 退出全屏模式!
exitFullscreen();