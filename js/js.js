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


var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.bottom = "0";
        } else {
          document.getElementById("navbar").style.bottom = "-130px";
        }
        prevScrollpos = currentScrollPos;
      }