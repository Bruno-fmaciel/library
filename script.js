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
        addBookCard();
    } else {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let book = new Book(title, author, pages, "Not read");
        myLibrary.push(book);
        addBookCard();
    }
}

function addBookCard() {
    const container = document.querySelector(".books");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const div2 =  document.createElement("div");
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');

    div.classList.add("book");
    container.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(div2);
    div2.appendChild(btn1);
    div2.appendChild(btn2);
    div2.classList.add("buttons");
    btn1.setAttribute("id","toggle");
    btn1.innerText = "Toggle read";
    btn2.classList.add("remove");
    btn2.innerText = "Remove";
    div.style["background: black"];

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
    








