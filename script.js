function toggleMode() {
  const html = document.documentElement

//  if(html.classList.contains('light')) {
//    html.classList.remove('light')
//  } else {
//    html.classList.add('light')
//  }

  html.classList.toggle('light')
}

let li = document.querySelector('#portfolio')

li.addEventListener('click', add)
function add() {
  alert('Portfólio em construção 🛠')
}