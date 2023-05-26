document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
});

document.getElementById('search-submit').addEventListener('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do clique no botão
  var searchTerm = document.getElementById('search-input').value;
  var searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);

  window.location.href = searchURL;
});
