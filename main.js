addEventListener('DOMContentLoaded', () => {
    let todoInputText;
    let todoList = [];
    let doneList = [];
    let todoBoard = document.querySelector('.todo-board');
    let todoAddBtn = document.querySelector('.todo-create-btn');
    let todoInput = document.querySelector('.todo-create-input');
    todoInput.addEventListener('input', (e) => todoInputText = e.target.value);
    todoAddBtn.addEventListener('click', () => {
        todoList.push(createTodo(todoInputText, todoList.length));
        todoList.map((item) => {
            // 배열 맨 앞에 넣도록 하기
            todoBoard.append(item);
        })
    });
})

const createTodo = (text, index) => {
    let todoCard = document.createElement('div');
    let todoText = document.createTextNode(text);
    let isChecked = false;

    todoCard.classList.add('todo-card');
    todoCard.classList.add('center');
    todoCard.setAttribute('key', index);
    todoCard.append(todoText);
    todoCard.addEventListener('click', () => {
        if(!isChecked) {
            todoCard.classList.add('checked');
            isChecked = true;
            handleClickCard();
        } else {
            todoCard.classList.remove('checked');
            isChecked = false;
            handleClickCard();
        }
    })
    return todoCard
}

const handleClickCard = () => {
    
}