document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // const textBox = document.getElementById('new-task-description')
  const form = document.getElementById('create-task-form')

  form.addEventListener('submit', (e) => addTask(e))

  const addTask = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
  }
  
});
