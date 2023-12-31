
const newBook = document.getElementById("new-book")
const bookDialog = document.getElementById("book-dialog")
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

Book.prototype.toggleReadStatus = function () {
    this.status = !this.status 
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


newBook.addEventListener("click", () => {

    bookDialog.showModal();

});



form.addEventListener("submit", function(event) {
   
    event.preventDefault()
    addBookToLibrary()
    bookDialog.close() 

    form.reset()
   
    
})



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

        const toggleButton = document.createElement("button")
        toggleButton.textContent = book.status ? "Read" : "Unread"
        toggleButton.addEventListener("click", () => {
            //Toggle the read status when the button is clicked
            book.toggleReadStatus();
            // update the button text to reflect the new status
            toggleButton.textContent = book.status ? "Read" : "Unread"
        })

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"

        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1)
            displayBooks()
        })

        bookCard.appendChild(titleElement)
        bookCard.appendChild(authorElement)
        bookCard.appendChild(pagesElement)
        bookCard.appendChild(toggleButton)
        bookCard.appendChild(removeButton)

        libraryContainer.appendChild(bookCard)
        
    }
    )
}