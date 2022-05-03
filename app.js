// initiating variables
let result = document.querySelector('.calc-display')
let keys = Array.from(document.getElementsByClassName('operator'))

// add event items

keys.map((key) => {
  key.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'AC':
        result.innerText = ''
        break

      case '←':
        if (result.innerText) {
          result.innerText = result.innerText.slice(0, -1)
        }
        break

      case '=':
        try {
          result.innerText = eval(result.innerText)
        } catch {
          result.innerText = 'Error!'
        }
        break

      default:
        result.innerText += e.target.innerText
    }
  })
})
