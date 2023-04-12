

const answers = [
  {
    id: 1,
    answer: 'pepitas pepitas',
    points: 38
  },
  {
    id: 2,
    answer: 'elotes',
    points: 25
  },
  {
    id: 3,
    answer: 'cacahuates',
    points: 20
  },
  {
    id: 4,
    answer: 'jicama',
    points: 15
  },
]

const showAnswer = ( answerNum ) => {
  if( answerNum <= 0 || answerNum > 4 ) return

  const {answer, points} = answers[answerNum-1]
  const $answer = $(`#answer${answerNum}`)
  const $points = $(`#points${answerNum}`)

  $answer.textContent = answer;
  $points.classList.add('answer-points');
  $points.textContent = points;
}

const hiddenAnswer = ( answerNum ) => {
  console.log(answerNum)
  if( answerNum <= 0 || answerNum > 4 ) return

  const $answer = $(`#answer${answerNum}`)
  const $points = $(`#points${answerNum}`)

  $answer.textContent = null;
  $points.classList.remove('answer-points');
  $points.textContent = null;
}

const $ = selector => document.querySelector(selector)


const $scoreGame  = $('#score-game')
const $scoreTeam1 = $('#score-team1')
const $scoreTeam2 = $('#score-team2')

const $equis1 = $('#equis1')
const $equis2 = $('#equis2')
const $equis3 = $('#equis3')


const $answers = document.querySelectorAll('.answer')


$answers.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    showAnswer(i+1);
  })
  btn.classList.add('cursor')
});

$answers.forEach((btn, i) => {
  btn.addEventListener('dblclick', () => {
    hiddenAnswer(i+1);
  })
  btn.classList.add('cursor')
});

