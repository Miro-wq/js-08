import throttle from 'lodash.throttle';

const OBJECT_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm.elements;

feedbackForm.addEventListener('input', throttle(onInputData, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(OBJECT_KEY)) || {};
reloadPage();

function onInputData(event) {
    dataForm = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(OBJECT_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if (email.value === '' || message.value === '') {
        return alert('Error: All fields must be filled out.');
    }
    console.log({ email: email.value, message: message.value });

    localStorage.removeItem(OBJECT_KEY);
    feedbackForm.reset();
    dataForm = {};
}

// =========================DRAFT======================================

// https://www.npmjs.com/package/lodash.throttle
// dataForm() Creates a new dataForm object.

// function populateStorage() {
//     localStorage.setItem("bgcolor", "red");

//localStorage.setItem("user", JSON.stringify(person)); ✓

// JSON.stringify(value)
//JSON.stringify(obj);
// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(arr); (JSON.stringify(dataForm))

// creating an object
// const myCountryInfo = {
//     country: 'India',
//     capital: 'New Delhi'
//   }
  
//   // stringifying the myCountryInfo object and 
//   // storing it in the localStorage
//   localStorage.setItem('myCountryInfo', JSON.stringify(myCountryInfo))

//var x = localStorage.getItem("test1");
  
//   // retrieving localStorage data in HTML
//   document.getElementById("content").innerHTML = localStorage.getItem("myCountryInfo");

// input - submit - reload page > log: mail & message