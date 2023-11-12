const COMMENTS_COUNT_SHOW = 5;

const bigPicture = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePuctureButtom = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-shown-count');
const totalCount = document.querySelector('.social__comment-total-count');
const commentsLoader = document.querySelector('.comments-loader');

let commentsCountShown = 0;
let comments = [];

const createComment = ({avatar, message, name}) => {
  const newComment = templateComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};
const renderComments = () => {
  commentsCountShown += COMMENTS_COUNT_SHOW;
  if(commentsCountShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsCountShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsCountShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }
  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentCount.textContent = commentsCountShown;
  totalCount.textContent = comments.length;
};
const hidenPicture = () => {
  commentsCountShown = 0;
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

const onCommentsLoaderClick = () => renderComments();
const showPicture = (pictureData) => {
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  comments = pictureData.comments;
  if(comments.length > 0) {
    renderComments();
  }
  renderPicture(pictureData);

};
closePuctureButtom.addEventListener('click', onClosePuctureButtom);
commentsLoader.addEventListener('click', onCommentsLoaderClick);
export {showPicture};
