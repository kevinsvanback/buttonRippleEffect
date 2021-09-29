const buttons = document.querySelectorAll('.rippleBtn')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // Get X and Y coordinates of your mouse click within the button
    const x = e.clientX
    const y = e.clientY

    // Get X and Y coordinates of where the buttons position starts 
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // Make the buttons X and Y coordinates start from 1,1
    const xInsideBtn = x - buttonLeft
    const yInsideBtn = y - buttonTop

    // Add the circle and manipulate it's style
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInsideBtn + 'px'
    circle.style.left = xInsideBtn + 'px'

    this.appendChild(circle)

    // Remove the circle from the DOM after 0.5s
    setTimeout(() => circle.remove(), 500)
  })
})