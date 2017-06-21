$(document).ready(function() {
  $(".manager-info__help").dotdotdot({
    ellipsis: '...',
    wrap: 'word',
    fallbackToLetter: true,
    watch: true
  });

  $('.feedback-wrapper__textarea').on('keydown', function(ctrlEnter) {
    var feedback = $('.feedback-wrapper__textarea').val();
    if ((ctrlEnter.ctrlKey && ctrlEnter.keyCode === 13) && feedback.length > 1) {
      var cloneBlock = $('.last-comment').clone();
      cloneBlock.removeClass('last-comment');
      $(cloneBlock).children('.testimonials-comments__caption').html('Посетитель');
      $(cloneBlock).children('.testimonials-comments__text').html(feedback);
      $(cloneBlock).children('.testimonials-comments__date').html('Сегодня');
      $('.testimonials-comments').append(cloneBlock);
      $('.feedback-wrapper__textarea').val('')
    }
  });

  $('.feedback-wrapper__button').on('click', function() {
    var feedback = $('.feedback-wrapper__textarea').val();
    if (feedback.length > 1) {
      var cloneBlock = $('.last-comment').clone();
      cloneBlock.removeClass('last-comment');
      $(cloneBlock).children('.testimonials-comments__caption').html('Посетитель');
      $(cloneBlock).children('.testimonials-comments__text').html(feedback);
      $(cloneBlock).children('.testimonials-comments__date').html('Сегодня');
      $('.testimonials-comments').append(cloneBlock);
      $('.feedback-wrapper__textarea').val('')
    }
    return false;
  });

})
