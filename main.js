
const newBook = document.getElementById("new-book")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const libraryContainer = document.getElementById("library-container")





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

    // reset the form after adding a book
    document.getElementById("form").reset()

}

/* when you click new book you want to clear the text on the form"*/

newBook.addEventListener("click", () => {

    
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none'
    }

});



form.addEventListener("submit", function(event) {
   
    event.preventDefault()
    addBookToLibrary()
    libraryContainer.style.display = 'block';
   
    
})

/* write a function called display books that 
dynamically creates and adds cards using JS */ 

function displayBooks () {
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

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"

        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            displayBooks()
        })


       
        bookCard.appendChild(titleElement)
        bookCard.appendChild(authorElement)
        bookCard.appendChild(pagesElement)
        bookCard.appendChild(statusElement)
        bookCard.appendChild(removeButton)

        libraryContainer.appendChild(bookCard)
        
    }
    )
}