document.addEventListener('DOMContentLoaded', function () {
  const feedbackBox = document.querySelector('.feedback-box');
  const rate = document.getElementById('starRating');
  const commentBox = document.getElementById('commentBox');

  // Hide the comment box initially
  commentBox.style.display = 'none';

  feedbackBox.addEventListener('mouseenter', function () {
    rate.style.display = 'block';
  });

  feedbackBox.addEventListener('mouseleave', function () {
    if (!rate.contains(document.activeElement)) {
      rate.style.display = 'none';
    }
  });

  rate.addEventListener('change', function () {
    // Display the comment box when a star is clicked
    commentBox.style.display = 'block';
  });
});
