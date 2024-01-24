function submit() {
  $("#target").unbind('submit').submit()
}

$(document).ready(function () {
  $('#target').on('submit', function (e) {
      e.preventDefault();
      $('#captcha').show();
  });
});