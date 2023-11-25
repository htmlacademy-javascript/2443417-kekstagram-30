import './form';
import {loadData} from './fetch.js';
import {renderPictures} from './renderPhoto.js';
import {showDataErrorMessage} from './util.js';
import {initFilter} from './filter.js';


const onSuccess = (data) => {
  renderPictures(data);
  initFilter(data);
  //document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};


loadData(onSuccess, showDataErrorMessage);

