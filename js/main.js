const h1DOM = document.querySelector('h1');
const formDOM = document.forms[0];
const textInputDOM = formDOM.querySelector('input');
const submitButtonDOM = formDOM.querySelector('button');
const listDOM = document.querySelector('.list');

const todoData = [];

submitButtonDOM.addEventListener('click', e => {
    e.preventDefault();

    if (textInputDOM.value.length === 0) {
        return;
    }

    todoData.push(textInputDOM.value);
    renderList();
});

function renderList() {
    if (todoData.length === 0) {
        renderEmptyList();
    } else {
        renderTaskList();
    }
}

function renderEmptyList() {
    listDOM.textContent = 'Empty';
}

function renderTaskList() {
    let HTML = '';

    for (const todo of todoData) {
        HTML += `
        <article class="item">
            <div class="text">${todo}</div>
                <div class="actions">
                    <button>Done</button>
                    <div class="divider"></div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
        </article>`;
    }

    listDOM.innerHTML = HTML;

    const articlesDOM = listDOM.querySelectorAll('article');

    for (const articleDOM of articlesDOM) {
        const deleteDOM = articleDOM.querySelectorAll('button')[2];
        deleteDOM.addEventListener('click', () => {
            articleDOM.remove();
        });
    }
}


