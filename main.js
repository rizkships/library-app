
const button = document.getElementById("btn")
const submit = document.getElementById("submit")
const form = document.getElementById("form")

const myLibrary = [];

function Book(title, author, pages, status) {
   // the constructor...
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let status = document.querySelector("#status").checked
    let newBook = new Book(title, author, pages, status)
    myLibrary.push(newBook)
    console.log(myLibrary)
    /* you need to append newBook to myLibrary */
   
}


button.addEventListener("click", () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'
    }
});

form.addEventListener("submit", function(event) {
   
    event.preventDefault()
    addBookToLibrary()
    
})