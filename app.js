

const answers = [
  {
    id: 1,
    answer: 'pepitas',
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


const $ = selector => document.querySelector(selector)


$scoreGame  = $('#score-game')
$scoreTeam1 = $('#score-team1')
$scoreTeam2 = $('#score-team2')

$equis1 = $('#equis1')
$equis2 = $('#equis2')
$equis3 = $('#equis3')

// $scoreGame.textContent = '100'
// $scoreTeam1.textContent = '200'
// $scoreTeam2.textContent = '80'

// $answer1.textContent = null
// $points1.textContent = null
// $points1.classList.remove('answer-points')

const showAnswer = ( answerNum ) => {
  if( answerNum <= 0 || answerNum > 4 ) return
  const {answer, points} = answers[answerNum-1]
  const $answer = $(`#answer${answerNum}`)
  const $points = $(`#points${answerNum}`)

  $answer.textContent = answer;
  $points.classList.add('answer-points');
  $points.textContent = points;
}

showAnswer(1)
