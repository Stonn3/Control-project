import readlineSync from 'readline-sync';

// Функция для генерации случайных чисел
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для вычисления наибольшего общего делителя (НОД)
const findGreatestCommonDivisor = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

// Функция для вычисления наименьшего общего кратного (НОК)
const findLeastCommonMultiple = (a, b) => (a * b) / findGreatestCommonDivisor(a, b);

// Функция для генерации вопроса и получения ответа от пользователя
const askQuestion = () => {
  const num1 = generateRandomNumber(1, 20);
  const num2 = generateRandomNumber(1, 20);
  const num3 = generateRandomNumber(1, 20);
  const lcm = findLeastCommonMultiple(findLeastCommonMultiple(num1, num2), num3);

  console.log(`Question: ${num1} ${num2} ${num3}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return { lcm, userAnswer };
};

// Функция для запуска игры
const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Find the smallest common multiple of given numbers.');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const { lcm, userAnswer } = askQuestion();

    if (Number(userAnswer) === lcm) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${lcm}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
