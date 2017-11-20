const VideoControls = () => {
  let $video = $('#j-video').get(0);
  let $btnPlay = $('.btn-play');
  let $btnPause = $('.btn-pause');

  $btnPause.on('click', function () {
    $video.pause();
    $btnPause.addClass('btn-hidden');
    $btnPlay.removeClass('btn-hidden');
  });

  $btnPlay.on('click', function () {
    $video.play();
    $btnPlay.addClass('btn-hidden');
    $btnPause.removeClass('btn-hidden');
  });
};

export default VideoControls;