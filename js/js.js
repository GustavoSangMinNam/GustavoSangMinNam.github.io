function check_full() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var enviarButton = document.querySelector('input[type="submit"]');

  function updateButtonState() {
    var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    enviarButton.disabled = checkedCheckboxes.length === 0;
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateButtonState);
  });

  updateButtonState();
}

document.addEventListener('DOMContentLoaded', function() {
  check_full();
  updateButtonState();
});
