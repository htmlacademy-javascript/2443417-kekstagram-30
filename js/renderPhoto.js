const templatePicture = document.querySelector('#picture').content.querySelector('.picture');


const createPicture = ({url, description, likes, comments, id}) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__info').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureElementId = id;
  return pictureElement;
};

const renderPictures = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    fragment.append(pictureElement);

  });
  container.append(fragment);
};

export {renderPictures};
