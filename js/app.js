document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#penguins-form');
form.addEventListener('submit', handleSubmitForm);

const deleteList = document.querySelector('#delete');
deleteList.addEventListener('click', handleDeleteList);

})

const handleSubmitForm = function(event) {
  event.preventDefault();
  const output = `Name: ${event.target.name.value} profession: ${event.target.profession.value}`

  const newElement = document.createElement('p');
  newElement.textContent = output;

  const penguinsList = document.querySelector('#penguins-list');
  penguinsList.appendChild(newElement);

  const formReset = document.querySelector('#penguins-form').reset()
};

const handleDeleteList = function(event) {
  const penguinsList = document.querySelector('#penguins-list');
  penguinsList.textContent = '';

};
