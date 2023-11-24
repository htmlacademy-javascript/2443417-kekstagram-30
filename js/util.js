const TIME_TO_DELETE_MESSAGE = 5000;
const isEscapeKey = (evt) => evt.key === 'Escape';
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomEl = (array) => array[randomInteger(0, array.length - 1)];

const showDataErrorMessage = () => {
  const message = document.querySelector('#data-error').content.querySelector('.data-error').cloneNode(true);
  document.body.append(message);
  setTimeout(() => {
    message.remove();
  }, TIME_TO_DELETE_MESSAGE);
};

export{isEscapeKey, randomInteger, getRandomEl, showDataErrorMessage};
