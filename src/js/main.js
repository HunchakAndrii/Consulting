console.log('Hello Dima')

document.querySelector('.burger').addEventListener('click', (e) => {
  e.preventDefault()
  document.querySelector('.burger').classList.toggle('active')
})

// let titleHeight = 0

// document.querySelectorAll('.info-block__title').forEach(item => {
//   if(item.scrollHeight > titleHeight) {
//     titleHeight = item.scrollHeight
//   }
// })

// document.querySelectorAll('.info-block__title').forEach(item => {
//   item.style.height = titleHeight + 'px'
// })