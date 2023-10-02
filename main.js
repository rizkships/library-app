const myLibrary = [];

function Book(title, author, pages, status) {
   // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    
}

function addBookToLibrary() {
    // do stuff here
}

const button = document.getElementById("btn")

button.addEventListener("click", () => {
    const form = document.getElementById("form")
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'
    }
});