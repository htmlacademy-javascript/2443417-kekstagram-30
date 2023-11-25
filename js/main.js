import { renderPictures } from './renderPhoto.js';
import { getData } from './fetch.js';
import { showDataErrorMessage } from './util.js';
import { initFilter } from './filter.js';
import './form.js';

const onSuccess = (data) => {
  renderPictures(data);
  initFilter(data);
};


getData(onSuccess, showDataErrorMessage);

