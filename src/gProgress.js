import readlineSync from 'readline-sync';

// Функция для генерации случайного числа в заданном диапазоне
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации геометрической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  let current = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current *= step;
  }
  return progression;
};

// Функция для скрытия случайного числа в прогрессии
const hideNumberInProgression = (progression) => {
  const hiddenIndex = generateRandomNumber(0, progression.length - 1);
  const hiddenValue = progression[hiddenIndex];
  const progressionWithHiddenValue = progression.map((value, index) => (index === hiddenIndex ? '..' : value));
  return { progressionWithHiddenValue, hiddenValue };
};

// Функция для вывода прогрессии и получения ответа от пользователя
const askQuestion = (progressionWithHiddenValue) => {
  console.log(`Question: ${progressionWithHiddenValue.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

// Функция для запуска игры
const startsGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const start = generateRandomNumber(1, 10);
    const step = generateRandomNumber(2, 5);
    const length = generateRandomNumber(5, 10);
    const progression = generateProgression(start, step, length);
    const { progressionWithHiddenValue, hiddenValue } = hideNumberInProgression(progression);
    const userAnswer = askQuestion(progressionWithHiddenValue);

    if (Number(userAnswer) === hiddenValue) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default startsGame;
