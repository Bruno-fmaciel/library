const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(newBook) {
    
}

const title = document.getElementById("title").innerText;
const author = document.getElementById("author").innerText;
const pages = document.getElementById("pages").innerText;
const addButton = document.querySelector("#add");
const clearButton = document.querySelector("#clear");
const rmvButton = document.querySelector(".remove");
const read = document.getElementById("read");

addButton.addEventListener("click", () => {
    if (read.checked) {
        
    } else {
       
    }
});
