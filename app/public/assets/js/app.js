$(document).ready(function() {
  // gets user input, and makes POST request
  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    const user = {
      name: $('#enter-name')
        .val()
        .trim(),
      photo: $('#image-link')
        .val()
        .trim(),
      // gets the value of each question and stores it as an array
      scores: $.map($('.q'), index => $(index).val())
    };

    // checks for valid user post
    validPost(user);
  });

  // prevents form from posting when it has an empty value
  function validPost(obj) {
    // runs through each property in the obj
    for (let prop in obj) {
      const key = obj[prop];

      // returns false if any user input is invalid.
      if ((Array.isArray(key) && key.includes('')) || key === '') {
        $('.alert-danger').removeClass('d-none');
        alert();
        return false;
      }
    }

    // only runs when the user has valid input
    return makePost(obj);
  }

  // sends the user input to the post route in apiRoutes. data returns the matched user
  function makePost(user) {
    $.post('/api/friends', user, function(data) {
      if (data) {
        $('.modal-body').append($(`<h4>${data.name}</h4>`));
        $('.modal-body').append($(`<img src="${data.photo}" class="photo"></img>`));
        $('#match-modal').modal('show');
      } else {
        console.log('Error.');
      }
    });
  }

  // displays alert to finish form
  function alert() {
    $('.alert-danger').remove();
    $('#submit-form').before(
      $(`
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Please finish the survey before submitting
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `)
    );
  }

  // clears last matched user when modal closes
  $('#match-modal').on('hidden.bs.modal', function() {
    $('.modal-body').html('');
  });
});
