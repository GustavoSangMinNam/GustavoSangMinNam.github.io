document.addEventListener('DOMContentLoaded', function() {
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

  function limpa_pref(){
    const checkall = document.querySelectorAll("input[type='checkbox']")
    checkall.forEach((checkbox) => {
      checkbox.checked = false
    })
  }

  function mensagem(time){
    const msg = document.querySelector('p')

    msg.style.visibility = 'visible'

    setTimeout(() =>{
      msg.style.visibility = 'hidden' 
    }, time)
  }

  sub = document.getElementById('envio')
  sub.addEventListener('click', function() {
    mensagem(2000)
    limpa_pref()
  })

})
