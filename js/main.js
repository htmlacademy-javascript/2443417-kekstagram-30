const PHOTO_COUNT = 25;
const DESCRIPTIONS = [
  'Это я в Париже, сейчас я дома уже',
  'Это я в Лондоне, сейчас я дома уже',
  'Это я в Москве, сейчас я дома уже',
  'Это я в Пекине, сейчас я дома уже',
  'Это я в Ростове, сейчас я дома уже',
  'Это я в Питере, сейчас я дома уже',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',

];

const NAMES = [
  'Ольга',
  'Павел',
  'Глеб',
  'Андрей',
  'Надежда',
  'Дарья',
  'Артем'
];

const Likes = {
  MIN: 15,
  MAX: 200
};

const Comments = {
  MIN: 0,
  MAX: 30
};

const Avatars = {
  MIN: 1,
  MAX: 6
};
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomEl = (array) => array[randomInteger(0, array.length - 1)];

const photos = [];
const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${randomInteger(Avatars.MIN, Avatars.MAX)}.svg`,
  message: getRandomEl(MESSAGES),
  name: getRandomEl(NAMES)
});

const addComments = (amount) => {
  const comments = [];
  for (let i = 1; i <= amount; i++) {
    comments.push(createComment(i));
  }
  return comments;
};


const addPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: getRandomEl(DESCRIPTIONS),
  likes: randomInteger(Likes.MIN, Likes.MAX),
  comments: addComments(randomInteger(Comments.MIN, Comments.MAX))
});


const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push(addPhoto(i));
  }

};
addPhotos();

const createPhoto = () => Array.from({length: PHOTO_COUNT}, (_, index) => addPhoto(index));

createPhoto();
