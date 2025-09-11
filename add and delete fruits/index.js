// Add the Edit Button:
// const editbtn = document.createElement('button');
// editbtn.className = 'edit-btn';
// editbtn.textContent = 'edit';

const form = document.querySelector('form');
const fruitInput = document.getElementById('fruit-to-add');
const fruitList = document.querySelector('.fruits');

// handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fruitName = fruitInput.value.trim();
    if (fruitName === '') return;

    // create new li elements
    const li = document.createElement('li');
    li.className = 'fruit';
    li.textContent = fruitName;

    // craete delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';

    // create edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    // append buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // append li to ul
    fruitList.appendChild(li);

    // clear input 
    fruitInput.value = '';
});

// handle delete functionality using event delagation 
fruitList.addEventListener('click', function (e){
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        fruitList.removeChild(li);
    }
});


