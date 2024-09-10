const myLibrary = [];

function Book(title, author, description, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.readStatus = read;
    this.filePath = file;
}

function addNewBookToLibrary() {
    // get values for book
    myLibrary.push(new Book(/*book values*/));
}

function displayBooks(library) {
    library.forEach(book => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
                    <button class="book-delete">X</button>
                    <p class="title">${book.title}</p>
                    <p class="author">${book.author}</p>
                    <p class="description">${book.description}</p>
                    <a class="book-open-file" href="${book.file}" download="${book.title}">Open Book</button>
                    <span>${book.readStatus}</span>
        `;

        bookShelf.appendChild(bookCard);
    });
}

const bookShelf = document.querySelector(".books-grid");
const submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", displayBooks);