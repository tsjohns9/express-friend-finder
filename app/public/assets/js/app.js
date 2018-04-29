$(document).ready(function() {
  // gets user input, and makes POST request
  $('#submit-form').on('click', function(e) {
    // e.preventDefault();

    const name = $('#enter-name')
      .val()
      .trim();

    const photo = $('#image-link')
      .val()
      .trim();

    // user answers for each question
    const scores = [
      $('#q-1').val(),
      $('#q-2').val(),
      $('#q-3').val(),
      $('#q-4').val(),
      $('#q-5').val(),
      $('#q-6').val(),
      $('#q-7').val(),
      $('#q-8').val(),
      $('#q-9').val(),
      $('#q-10').val(),
    ];

    const user = { name, photo, scores };

    $.post('/api/friends', user, function(data) {
      console.log('data:', data);
      if (data) {
        console.log('Posted');
      } else {
        console.log('Error.');
      }
    });
  });
});
