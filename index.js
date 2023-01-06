// Selectors
const todoInput = document.getElementById('input')
const form = document.getElementById('form')
const todoButton = document.getElementById('button')
const todoList = document.getElementById('list')
const filterOption = document.querySelector('.filter-todo')

// Event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

// Functions
function deleteCheck(e) {
  const item = e.target
  if (item.classList.contains(`delete-btn`)) {
    const todo = item.closest('.todo')
    // const todo = item.parentElement
    todo.classList.add('fall')
    todo.addEventListener('transitionend', () => {
      todo.remove()
    })
  }

  if (item.classList.contains('complete-btn')) {
    item.closest('.todo').classList.toggle('completed')
  }
}

function addTodo(e) {
  e.preventDefault()

  const todoDiv = document.createElement('div')
  todoDiv.classList.add('todo')

  const newTodo = document.createElement('li')
  newTodo.textContent = todoInput.value
  newTodo.classList.add('item')
  todoDiv.appendChild(newTodo)

  const completeButton = document.createElement('button')
  completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`
  completeButton.classList.add(`complete-btn`)
  todoDiv.appendChild(completeButton)

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
  deleteButton.classList.add(`delete-btn`)
  todoDiv.appendChild(deleteButton)
  todoList.append(todoDiv)
  form.reset()
}

function filterTodo(e) {
  const todos = todoList.childNodes
  todos.forEach(todo => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex'
        break
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else {
          todo.style.display = 'none'
        }
        break
      case 'incompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else {
          todo.style.display = 'none'
        }
        break
    }
  })
}
