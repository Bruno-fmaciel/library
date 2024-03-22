const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    if (checkbox.checked) {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let book = new Book(title, author, pages, "Read");
        myLibrary.push(book);
    } else {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        console.log(title)
        let book = new Book(title, author, pages, "Not read");
        myLibrary.push(book);
    }
}

function addBookCard() {

}

let showForm = document.querySelector(".form");
showForm.addEventListener('click', () => {
    let formBook = document.querySelector("#bookForm");
    let pForm = document.querySelector(".forms");
    formBook.style.display = "block";
    showForm.style.display = "none";
    pForm.style.display = "none";
});

let addNewBook = document.querySelector("#add");
let checkbox = document.querySelector("input#read");
addNewBook.addEventListener('click',(e) => {
    e.preventDefault();
    addBook();
});
    








