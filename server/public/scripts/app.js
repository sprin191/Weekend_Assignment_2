$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: '/data',
    success: function (data) {
      var currentIndex = 0;
      appendDOM();

//index selector function
      $('.selector').on('click', '.person', function () {
        currentIndex = Number($(this).attr('id'));
        $('.selector').find('.selected').removeClass('selected');
        $('#' + currentIndex).addClass('selected');
        appendDOM();
      });

//next and prev functions
      $('.container').on('click', '#next', function () {
        currentIndex++;
        if (currentIndex < 0) {
          currentIndex = data.mu.length - 1;
        } else if (currentIndex > data.mu.length - 1) {
          currentIndex = 0;
        }

        $('.selector').find('.selected').removeClass('selected');
        $('#' + currentIndex).addClass('selected');
        appendDOM();

      });

      $('.container').on('click', '#prev', function () {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = data.mu.length - 1;
        } else if (currentIndex > data.mu.length - 1) {
          currentIndex = 0;
        }

        $('.selector').find('.selected').removeClass('selected');
        $('#' + currentIndex).addClass('selected');
        appendDOM();

      });

//function to append selected shoutout to the DOM
      function appendDOM() {
        $('.ajax-data').fadeOut('slow', function () {
          $('.ajax-data').children().remove();
          $('.ajax-data').append('<p>Name: ' + data.mu[currentIndex].name);
          $('.ajax-data').append('<p>Git Username: ' + data.mu[currentIndex].git_username);
          $('.ajax-data').append('<p>Shoutout: ' + data.mu[currentIndex].shoutout);
          $('.ajax-data').fadeIn('slow');
        });
      }
    },
  });
});
