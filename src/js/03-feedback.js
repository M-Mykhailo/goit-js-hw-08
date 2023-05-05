import throttle from 'lodash.throttle';

const refs = {
  feedbackForm: document.querySelector(`.feedback-form`),
  email: document.querySelector(`[name="email"]`),
  message: document.querySelector(`[name="message"]`),
};

refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const localStorageValue = {};
autofillForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value.trim() === '' || refs.message.value.trim() === '') {
    return alert('Please fill in the other fields!');
  }
  const json = localStorage.getItem(STORAGE_KEY);
  console.log(JSON.parse(json));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
  localStorageValue[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageValue));
}

function autofillForm() {
  const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedValue) {
    refs.email.value = savedValue.email || '';
    refs.message.value = savedValue.message || '';
  }
}



