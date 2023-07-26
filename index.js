const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetArr = [...alphabet]
const keyboard = document.querySelector('.containerKeyboard')
const containerAnswer = document.querySelector('.containerAnswer')
let word = ''
let cleanWord = ''
let tries = 0

function btnOnPress() {
  const answerSpaces = document.querySelectorAll('.answerSpace')
  const answerSpacesText = [...answerSpaces].map(span => span.textContent).join('')

  this.disabled = true
  this.classList.add('disabledLetter')

  console.log(this.textContent, cleanWord)

  if (!cleanWord.includes(this.textContent)) {
    tries++
    this.classList.add('wrongLetter')
    wrongLetter(tries)
  }
  
  for (let i = 0; i < answerSpaces.length; i++) {
    if (answerSpaces[i].dataset.letter === this.textContent) {
      answerSpaces[i].textContent = this.textContent
    }
  }
  setTimeout(() => {
    checkWinn(answerSpacesText);
  }, 10);
}

function wrongLetter(tries) {
  const hangman = document.querySelector('.hangman')

  switch (tries) {
    case 1:
      hangman.attributes.src.value = './public/images/head_hangman.png'
      break
    case 2:
      hangman.attributes.src.value = './public/images/body_hangman.png'
      break
    case 3:
      hangman.attributes.src.value = './public/images/right_leg_hangman.png'
      break
    case 4:
      hangman.attributes.src.value = './public/images/right_left_leg_hangman.png'
      break
    case 5:
      hangman.attributes.src.value = './public/images/right_hand_hangman.png'
      break
    case 6:
      hangman.attributes.src.value = './public/images/full_hangman.png'
      setTimeout(() => {
        alert('You lost!')
        startGame()
      }, 20);
      break
  }
}

function checkWinn(answerSpacesText) {
  if (answerSpacesText === cleanWord) {
    const letter = document.querySelectorAll('.letter')
    letter.forEach(btn => btn.disabled = true)
    alert('You won!')
    startGame()

    return true
  }
  else return false
}

const renderLetters = () => {
  keyboard.innerHTML = ''
  alphabetArr.forEach(letter => {
    const letterButton = document.createElement('button')
    letterButton.classList.add('letter')
    letterButton.innerHTML = `<p>${letter}</p>`
    letterButton.addEventListener('click', btnOnPress)

    keyboard.append(letterButton)
  })
}

async function getWord() {
  const response = await fetch('https://api.dicionario-aberto.net/random').then(res => res.json())
  const word = response.word

  console.log(word.toUpperCase())

  return word.toUpperCase()
}

function findAllIndexes(str) {
  return str.split('').map((letter, index) => (letter === ' ' || letter === '-' ? index : null)).filter(Number.isInteger)
}

function clearWord(word) {
  return word.slice().replace(/[ÁÀÂÃ]/g, 'A').replace(/[ÉÈÊ]/g, 'E').replace(/[ÍÌÎ]/g, 'I').replace(/[ÓÒÔÕ]/g, 'O').replace(/[ÚÙÛ]/g, 'U').replace(/Ç/g, 'C')
}

const renderAnswerSpaces = (word) => {
  containerAnswer.innerHTML = ''
  cleanWord = clearWord(word)
  const blankSpaces = findAllIndexes(word)
  let spans = []

  cleanWord.split('').forEach((letter, index) => {
    const span = document.createElement('span')
    if (blankSpaces.includes(index)) {
      span.setAttribute('data-letter', ' ')

    } else {
      Object.assign(span, {classList: 'answerSpace'})
      span.setAttribute('data-letter', letter)
    }
    spans.push(span)
  })

  spans.forEach(span => containerAnswer.append(span))
}

// initializate the game
async function startGame() {
  document.querySelector('.hangman').attributes.src.value = './public/images/empty_hangman.png'
  renderLetters()
  word = await getWord()
  renderAnswerSpaces(word)
}

document.addEventListener('DOMContentLoaded', startGame)

// menssage to prevent lost progress
window.addEventListener('beforeunload', (ev) => {
  ev.preventDefault()
  const msg = 'Deseja recarregar? Todo progresso será perdido.'
  ev.returnValue = msg
})