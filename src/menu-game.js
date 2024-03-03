import readlineSync from 'readline-sync';
import startBrainSCM from './brain-scm.js';
import startGProgress from './gProgress.js';

const showMenu = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Please choose the game you want to play:');
  console.log('1. Brain SCM (Smallest Common Multiple)');
  console.log('2. Geometric Progression');
  console.log('0. Exit');
};

const startMenu = () => {
  showMenu();
  const choice = readlineSync.question('Enter your choice: ');

  switch (choice) {
    case '1':
      startBrainSCM();
      break;
    case '2':
      startGProgress();
      break;
    case '0':
      return; // Завершаем выполнение функции
    default:
      console.log('Invalid choice. Please select a valid option.');
  }
};

// Automatically start the menu when the file is executed

export default startMenu;
