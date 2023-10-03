
const button = document.getElementById("btn")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const card = document.getElementById("card")
const cardTitle = document.getElementById("card-title")
const cardAuthor = document.getElementById("card-author")
const cardPages = document.getElementById("card-pages")
const cardStatus = document.getElementById("card-status")
const cardRemove = document.getElementById("card-remove")


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
    displayBooks()

    /*
    cardTitle.textContent = myLibrary[0].title */
    
    /*console.log(myLibrary) */
    /* you need to append newBook to myLibrary */
    
}


button.addEventListener("click", () => {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'
    }
});
const libraryContainer = document.getElementById("library-container")

form.addEventListener("submit", function(event) {
   
    event.preventDefault()
    addBookToLibrary()

    if (libraryContainer.style.display === 'none') {
        libraryContainer.style.display = 'block';
    } else {
        libraryContainer.style.display = 'none'
    }
    
})

/* write a function called display books that 
dynamically creates and adds cards using JS */ 

function displayBooks () {
    const libraryContainer = document.getElementById("library-container")
    libraryContainer.textContent = ""

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card")

        const titleElement = document.createElement("h2")
        titleElement.textContent = book.title

        const authorElement = document.createElement("p")
        authorElement.textContent = book.author

        const pagesElement = document.createElement("p")
        pagesElement.textContent = book.pages

        const statusElement = document.createElement("p")
        statusElement.textContent = book.status ? "Read" : "Unread"
       
        bookCard.appendChild(titleElement)
        bookCard.appendChild(authorElement)
        bookCard.appendChild(pagesElement)
        bookCard.appendChild(statusElement)

        libraryContainer.appendChild(bookCard)
        
    }
    )
}