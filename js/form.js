import {isEscapeKey} from './util';
import { init as initEffect, reset as resetEffect } from './effect.js';
import { uploadData } from './fetch.js';
import { onScaleBtnClick } from './scale.js';
import { showErrorMessage, showSuccessMessage } from './status-messages.js';

const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_COUNT = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAG_COUNT} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хэштег',
  INVALID_COMMENT_COUNT: `Длина комментария больше ${MAX_COMMENT_COUNT} символов`,
};
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const fileField = form.querySelector('.img-upload__input');//
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo : 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
});

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;
const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};
const hideModal = () => {
  form.reset();
  pristine.reset();
  resetEffect();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};
const isErrorMessageShow = () => Boolean(document.body.querySelector('.error'));
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !isErrorMessageShow()){
    evt.preventDefault();
    hideModal();
  }
}
const onFileInputChange = () => {
  showModal();
};
const onCancelButtonClick = () => {
  hideModal();
};
const sendForm = () => {
  showSuccessMessage();
  hideModal();
  form.querySelector('.img-upload__submit').disabled = false;
};
form.querySelector('.img-upload__scale').addEventListener('click', onScaleBtnClick);
const validateComment = (value) => {
  if (value.length <= 140) {
    return true;
  }
  return false;
};
const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_COUNT;

const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));


const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    const data = new FormData(form);
    form.querySelector('.img-upload__submit').disabled = true;
    uploadData(sendForm, showErrorMessage, 'POST', data);
  }
};

pristine.addValidator(
  commentField,
  validateComment,
  ErrorText.INVALID_COMMENT_COUNT,
  1,
  true
);

pristine.addValidator(
  hashtagField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

pristine.addValidator(
  hashtagField,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  1,
  true
);

pristine.addValidator(
  hashtagField,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE,
  2,
  true
);

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
initEffect();
