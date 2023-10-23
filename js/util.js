const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomEl = (array) => array[randomInteger(0, array.length - 1)];

export{randomInteger, getRandomEl};
