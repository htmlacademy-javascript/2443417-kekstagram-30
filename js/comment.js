const commentsList = document.querySelector('.social__comments');
const templateComment = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = ({avatar, message, name}) => {
  const newComment = templateComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};
const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);

  });
  commentsList.append(fragment);
};

export {renderComments};
