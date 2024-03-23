const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    addBookCard();
}

function addBook() {
    if (checkbox.checked) {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
        addBookCard();
    } else {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let book = new Book(title, author, pages, !read);
        myLibrary.push(book);
        addBookCard();
    }
}



function addBookCard() {
    const container = document.querySelector(".books");
    container.innerHTML = "";
    for (let i = 0 ; i < myLibrary.length ; i++) {
        let book = myLibrary[i];
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.innerText = book.title;
        const p1 = document.createElement("p");
        p1.innerText = book.author;
        const p2 = document.createElement("p");
        p2.innerText = book.pages;
        const p3 = document.createElement("p");
        p3.innerText = book.read? "Read" : "Not read";
        const div2 =  document.createElement("div");
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');

        div.classList.add("book");
        container.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        p3.classList.add("read");
        div.appendChild(div2);
        div2.appendChild(btn1);
        div2.appendChild(btn2);
        div2.classList.add("buttons");
        btn1.setAttribute("id","toggle");
        btn1.innerText = "Toggle read";
        btn1.onclick = function() {
            myLibrary[i].toggleRead();
            addBookCard();
        }
        btn2.classList.add("remove");
        btn2.innerText = "Remove";
        btn2.onclick = function(i) {myLibrary.splice(i,1);
        addBookCard()};
        div.style["background: black"];
    }
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


    








