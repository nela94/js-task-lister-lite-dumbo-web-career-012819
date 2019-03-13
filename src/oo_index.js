
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const findForm = document.querySelector('form')
  findForm.addEventListener('submit', function(event) {
  event.preventDefault()

  const taskDescription = event.target.children[1].value
  const ulTag = document.querySelector('ul')

  ulTag.innerHTML =
   ulTag.innerHTML + `<li> ${taskDescription} </li>`

})
