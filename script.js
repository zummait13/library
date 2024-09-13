const myLibrary = [];
displayBooks(myLibrary);

const bookShelf = document.querySelector(".books-grid");
const submitBtn = document.querySelector("button[type='submit']");

// move the read status from form to object prototype
// change the file status
// toggle sidebar

function displayBooks(library) {
    library.forEach(book => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
                    <button class="book-delete">X</button>
                    <p class="title">${book.title}</p>
                    <p class="author">${book.author}</p>
                    <p class="description">${book.description}</p>
                    <a class="book-open-file" href="${book.file}" download="${book.title}">Open Book</a>
                    <span>${book.read}</span>
        `;

        bookShelf.appendChild(bookCard);
    });
}

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

    deleteBook_byBtn();
}

function deleteBook_byBtn() {

const deleteBookBtn = document.querySelector(".book-delete");

deleteBookBtn.addEventListener("click", e => {
    console.log("click");
    e.target.parentNode.remove();
});

}