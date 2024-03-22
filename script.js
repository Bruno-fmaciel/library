const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(newBook) {
    myLibrary.push(newBook);
}

let showForm = document.querySelector(".form");
showForm.addEventListener('click', () => {
    let formBook = document.querySelector("#bookForm");
    let pForm = document.querySelector(".forms");
    formBook.style.display = "block";
    showForm.style.display = "none";
    pForm.style.display = "none";
})





