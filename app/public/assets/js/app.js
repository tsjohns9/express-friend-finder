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
      scores: $.map($('.q'), index => $(index).val()),
    };

    // checks for valid user post
    validPost(user);
  });

  // prevents form from posting when it has an empty value
  function validPost(obj) {
    // runs through each property in the obj
    for (let prop in obj) {
      const key = obj[prop];

      // checks if a prop is an array
      if (Array.isArray(key)) {
        const checkEmpty = key.find(a => a === 'Choose...');

        // if the array contains an empty input, then the form wont submit
        if (checkEmpty === 'Choose...') {
          return false;
        }
      } else if (obj[prop] === '') {
        return false;
      }
    }

    // only runs when the user has valid input
    return makePost(obj);
  }

  // sends the user input to the post route in apiRoutes. data returns the matched user
  function makePost(user) {
    $.post('/api/friends', user, function(data) {
      console.log('data: ', data);
      if (data) {
        $('.modal-body').append($(`<h4>${data.name}</h4>`));
        $('.modal-body').append($(`<img src="${data.photo}"></img>`));
        $('#match-modal').modal('show');
      } else {
        console.log('Error.');
      }
    });
  }

  // clears last matched user when modal closes
  $('#match-modal').on('hidden.bs.modal', function() {
    $('.modal-body').html('');
  });
});
