import {renderPictures} from './renderPhoto.js';
import {showPicture} from './picture.js';

const container = document.querySelector('.pictures');

const renderLargePicture = (pictures) => {
  container.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('[data-picture-element-id]');
    if(!pictureElement){
      return;
    }
    evt.preventDefault();
    const pictureElementId = +pictureElement.dataset.pictureElementId;
    const pictureData = pictures.find(({id}) => id === pictureElementId);
    showPicture(pictureData);
  });
  renderPictures(pictures, container);
};

export {renderLargePicture};
