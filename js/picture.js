import {renderComments} from './comment.js';

const bigPicture = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePuctureButtom = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

const hidenPicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};
const onClosePuctureButtom = () => {
  hidenPicture();
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidenPicture();
  }
}
const renderPicture = ({url,description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};
const showPicture = (pictureData) => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderComments(pictureData.comments);
  renderPicture(pictureData);

};
closePuctureButtom.addEventListener('click', onClosePuctureButtom);

export {showPicture};
