const myLibrary = [];

const bookShelf = document.querySelector(".books-grid");
const submitBtn = document.querySelector("button[type='submit']");

// toggle sidebar
// is not realised https://codepen.io/dphrag/pen/JeayLw
// need to change grid settings to

// Getting values from form

const bookForm = document.querySelector("form");

bookForm.addEventListener("submit", e => {
    e.preventDefault();

    let formData = new FormData(bookForm);
    let book = Object.fromEntries(formData);

    console.log(book);

    addNewBookToLibrary(book);
})

function addNewBookToLibrary(book) {
    myLibrary.push(book);
    displayNewBook(book);
}

function displayNewBook(book) {
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card");

    let htmlCardContent = `
                <button class="book-delete">X</button>
                <p class="title">${book.title}</p>
                <p class="author">${book.author}</p>
                <p class="description">${book.description}</p>
                <a class="book-open-file" href="${book.file}" download="${book.title}">Open Book</a>
                <span>${book.read}</span>
    `
    bookCard.innerHTML = htmlCardContent;

    bookShelf.appendChild(bookCard);

    add_deleteBookListn();
    toggleReadStatus(bookCard);
}

function add_deleteBookListn() {

    // add listener only to the last book

    const deleteBookBtns = document.querySelectorAll(".book-delete");
    const last_delBtn = deleteBookBtns[deleteBookBtns.length-1];

    last_delBtn.addEventListener("click", e => {
        e.target.parentNode.remove();
        });
}

// change the read status

function toggleReadStatus(bookCard) {

    const readElem = bookCard.querySelector("span");

    readElem.addEventListener("click", e => {
        e.target.textContent = (e.target.textContent == "not read") ? "read" : "not read";
    })
}