
import './form';
import {loadData} from './fetch.js';
import {renderPictures} from './renderPhoto.js';
import {showDataErrorMessage} from './util';


let photos = [];

const onSuccess = (data) => {
  photos = data.slice();
  renderPictures(photos);
  //document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};


loadData(onSuccess, showDataErrorMessage);
export {photos};
