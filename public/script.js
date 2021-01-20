let burger = document.querySelector('#burger');
let menu = document.querySelectorAll('#menu');

burger.addEventListener('click', () => {
  menu.forEach(c => {
      c.classList.toggle('hidden')
    })
})
