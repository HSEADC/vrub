//Вопросы

const questions = [
  {
    question: 'Какое время суток тебе больше всего нравится?',
    choices: [
      'Рассвет, солнышко, птички поют',
      'Середина дня, когда все вокруг в движении',
      'Закат, люблю этот вайб спокойствия и безмятежности',
      'Ночь, время тайн и неизведанного'
    ]
  },

  {
    question: 'Какой элемент ты выберешь?',
    choices: ['Вода', 'Земля', 'Огонь', 'Воздух']
  },
  {
    question: 'Где будешь чувствовать себя лучше всего?',
    choices: [
      'На улицах неонового ночного города',
      'В заброшенных зданиях',
      'На лесных тропинках',
      'На берегу бескрайнего пляжа'
    ]
  },
  {
    question: 'Какой аромат для тебя наиболее притягательный?',
    choices: [
      'Запах свежего кофе утром',
      'Аромат старых книг и истории',
      'Чистый воздух после дождя',
      'Запах асфальта в ранее холодное утро'
    ]
  },

  {
    question: 'Как ты относишься к путешествиям?',
    choices: [
      'Люблю планировать и следовать маршруту',
      'Предпочитаю неожиданные повороты и авантюры',
      'Ищу гармонию и вдохновение в новых местах',
      'Стремлюсь к открытиям и необычным ощущениям'
    ]
  },
  {
    question: 'Выбери идеальный способ провести выходной:',
    choices: [
      'Встреча с друзьями на природе',
      'Соло-путешествие без карты и планов',
      'Исследование неизведанных уголков города',
      'Пара каточек в любимой игре под уютным пледом'
    ]
  },
  {
    question: 'Какой инструмент привлекает тебя больше всего?',
    choices: ['Синтезатор', 'Электрогитара', 'Барабаны', 'Флейта']
  },
  {
    question: 'Какое качество тебя лучше всего описывает?',
    choices: [
      'Творческий подход ко всему',
      'Уверенность в себе',
      'Способность находить красоту в повседневности',
      'Жажда новых впечатлений'
    ]
  },
  {
    question: 'Что для тебя важнее всего в музыке?',
    choices: [
      'Глубина и насыщенность звука',
      'Способность вызвать сильные эмоции',
      'Приятная мелодия',
      'Энергия и драйв, поднимающие настроение'
    ]
  },
  {
    question: 'Как ты предпочитаешь завершать свой день?',
    choices: [
      'Чтением книги под мягкий свет лампы',
      'Обсуждением с друзьями прожитого дня',
      'Думскроллю до часа ночи'
    ]
  }
]

// Ответы

const genreScores = {
  'Инди-фолк': [
    'Рассвет, солнышко, птички поют',
    'Вода',
    'Встреча с друзьями на природе',
    'Приятная мелодия'
  ],
  Шугейз: [
    'Закат, люблю этот вайб спокойствия и безмятежности',
    'Соло-путешествие без карты и планов'
  ],
  Электропоп: ['Середина дня, когда все вокруг в движении', 'Синтезатор'],
  'Панк-рок': ['Огонь', 'Электрогитара', 'Способность вызвать сильные эмоции'],
  'Лоу-фай': [
    'Воздух',
    'Ищу гармонию и вдохновение в новых местах',
    'Чтением книги под мягкий свет лампы'
  ],
  Техно: [
    'На улицах неонового ночного города',
    'Энергия и драйв, поднимающие настроение'
  ],
  'Инди-рок': [
    'На лесных тропинках',
    'Исследование неизведанных уголков города'
  ],
  Даунтэмпо: ['На берегу бескрайнего пляжа', 'Глубина и насыщенность звука'],
  Хаус: ['Запах свежего кофе утром'],
  'Инди-поп': ['Аромат старых книг и истории', 'Творческий подход ко всему'],
  Эмбиент: [
    'Чистый воздух после дождя',
    'Способность находить красоту в повседневности'
  ],
  'Прогрессив-рок': [
    'Ночь, время тайн и неизведанного',
    'В заброшенных зданиях',
    'Запах асфальта в ранее холодное утро',
    'Жажда новых впечатлений'
  ],
  'Поп-рок': ['Люблю планировать и следовать маршруту', 'Барабаны'],
  Грайндкор: ['Предпочитаю неожиданные повороты и авантюры'],
  Гиперпоп: [
    'Стремлюсь к открытиям и необычным ощущениям',
    'Пара каточек в любимой игре под уютным пледом'
  ],
  'Джаз фьюжн': ['Флейта'],
  'Блэк-метал': ['Уверенность в себе', 'Думскроллю до часа ночи', 'Земля']
}

//Картинки ответов

const resultImages = {
  'Инди-фолк': 'indie-folk',
  Шугейз: 'shoegaze',
  Электропоп: 'electropop',
  'Панк-рок': 'punk-rock',
  'Лоу-фай': 'lo-fi',
  Техно: 'techno',
  Даунтэмпо: 'downtempo',
  Хаус: 'house',
  Эмбиент: 'ambient',
  'Поп-рок': 'pop-rock',
  Грайндкор: 'grindecore',
  Гиперпоп: 'hyperpop',
  'Джаз фьюжн': 'jazz',
  'Блэк-метал': 'metal'
}

let currentQuestionIndex = 0
let score = {}

const questionElement = document.querySelector('.A_Question')
const choicesElement = document.getElementById('choices')
const prevButton = document.querySelector('.A_SecondaryButtonLeft')
const nextButton = document.querySelector('.A_SecondaryButtonRight')
const restartButton = document.getElementById('restart-btn')

document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen')
  const startButton = document.getElementById('start-btn')
  const questionContainerElement = document.getElementById('question-container')

  startButton.addEventListener('click', () => {
    startScreen.classList.add('hide') // Спрятать стратовый экран
    startGame()
  })

  function startGame() {
    startButton.classList.add('hide') // Спрятать кнопку старта
    questionContainerElement.classList.remove('hide') // Показать тест
  }
})

function selectChoice(choice) {
  score[currentQuestionIndex] = choice
  if (currentQuestionIndex === questions.length - 1) {
    displayResult()
    return
  }
  nextQuestion()
}

// Следующий вопрос
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++
    displayQuestion()
  }
}

// Прошлый вопрос
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--
    displayQuestion()
  }
}
// Считаем результат
function calculateResult() {
  let scores = {}

  for (let genre in genreScores) {
    scores[genre] = 0
  }

  Object.values(score).forEach((choice) => {
    for (let genre in genreScores) {
      if (genreScores[genre].includes(choice)) {
        scores[genre]++
      }
    }
  })

  // Считаем самое большое кол-во баллов жанра
  let highestScore = 0
  let highestGenre = ''
  for (let genre in scores) {
    if (scores[genre] > highestScore) {
      highestScore = scores[genre]
      highestGenre = genre
    }
  }

  return highestGenre
}

//Результат

function displayResult() {
  const finalGenre = calculateResult()
  const resultText = `${finalGenre}`

  questionElement.textContent = ''
  choicesElement.innerHTML = ''
  document.querySelector('.A_QuestionCount').textContent = ''

  // Текст результата
  document.getElementById('result-text').textContent = resultText

  // const resultphoto = `<img id="result-image" alt="Картинка результата" src="%resultimage%" />`

  // КАртинка результата
  document.getElementById('result-image').src = resultImageSrc
  console.log(resultImageSrc)

  const resultImageSrc = resultImages[finalGenre]

  console.log(resultImageSrc)
  console.log(resultImages[finalGenre])
  // document.getElementById('result-image').style.display = 'inline' // Make sure the image is visible
  document
    .getElementById('result-image')
    .classList.add(resultImages[finalGenre])

  // Показать контейнер результата
  document.getElementById('result-container').style.display = 'block'

  // Спрятать прогресс бар во время реазультата
  document.getElementById('progress-container').style.display = 'none'

  restartButton.style.display = 'inline'
  hideNavigationButtons()
}

// Прогресс бар

function updateProgressBar() {
  const totalQuestions = questions.length
  const currentProgress = ((currentQuestionIndex + 1) / totalQuestions) * 100
  document.querySelector('.A_ProgressBar').style.width = `${currentProgress}%`
}

// Спрятать кнопки
function hideNavigationButtons() {
  document.querySelector('.A_SecondaryButtonLeft').style.display = 'none'
  document.querySelector('.A_SecondaryButtonRight').style.display = 'none'
}

// Вопросы теста

function displayQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].question
  choicesElement.innerHTML = ''
  questions[currentQuestionIndex].choices.forEach((choice) => {
    const button = document.createElement('button')
    button.textContent = choice
    button.className = 'Q_Answer'
    button.onclick = () => selectChoice(choice)
    choicesElement.appendChild(button)
  })
  // Стили для контейнера
  choicesElement.style.display = 'flex'
  choicesElement.style.flexDirection = 'column'
  choicesElement.style.alignItems = 'center'

  // Обновить прогресс бар
  updateProgressBar()

  // Обновить счетчик вопросов
  updateQuestionCounter()
}

// Номер вопроса

function updateQuestionCounter() {
  const totalQuestions = questions.length
  const currentQuestionNumber = currentQuestionIndex + 1
  const counterText = `Вопрос ${currentQuestionNumber} / ${totalQuestions}`
  document.querySelector('.A_QuestionCount').textContent = counterText
}

// Перезапуск прогресса

function restartQuiz() {
  currentQuestionIndex = 0
  score = {}
  displayQuestion()
  restartButton.style.display = 'none'

  // Спрятать текст и картинку результата
  document.getElementById('result-container').style.display = 'none'
  document.getElementById('result-image').style.display = 'none' // Спрятать картинку
  document.getElementById('result-image').src = '' // Сбросить путь к картинке
  document.querySelector('.A_SecondaryButtonLeft').style.display = 'flex'
  document.querySelector('.A_SecondaryButtonRight').style.display = 'flex'

  // Показать прогресс бар снова
  document.getElementById('progress-container').style.display = 'block'
}

prevButton.addEventListener('click', prevQuestion)
nextButton.addEventListener('click', nextQuestion)
restartButton.addEventListener('click', restartQuiz)

displayQuestion()
