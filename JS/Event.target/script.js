// EVENT. TARGET

const button = document.querySelector('#button')

button.addEventListener('click', function (event) {
  console.log(event.target) //gives the element on which the event was listened or fired
  // console.log('Button clicked ')
})
