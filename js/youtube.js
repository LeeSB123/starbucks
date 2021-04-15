// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // 이 함수의 이름은 유튜브의 라이브러리가 이 함수를 찾는 것이므로 이름 바꾸면 안됨
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',  // 최초 재생할 유튜브 영상 ID
    playerVars: { // 영상을 재생하기 위한 여러가지 옵션들
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거 (playerVars에서는 이 속성을 제공하지 않아서 따로 이벤트를 만들어서 사용함)
      }
    }
  });
}