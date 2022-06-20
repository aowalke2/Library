let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function readStatusCheck(readStatus)
{
    return readStatus ? "Unread" : "Read"
}

function addBookToLibrary() {
    let bookcards = document.getElementsByClassName("bookcards")[0]
    //TODO: remove all books then re-add them

    for (const book in myLibrary)
    {
        let card = document.createElement("div")
        card.classList.add("card")

        let title = document.createElement("div")
        title.classList.add("title")
        title.textContent = book.title
        card.appendChild(title)

        let author = document.createElement("div")
        author.classList.add("author")
        author.textContent = book.author
        card.appendChild(author)

        let numberOfPages = document.createElement("div")
        numberOfPages.classList.add("number-of-pages")
        numberOfPages.textContent = book.pages
        card.appendChild(numberOfPages)

        let buttons = document.createElement("div")
        buttons.classList.add("buttons")

        let readStatusBtn = document.createElement("button")
        readStatusBtn.classList.add("read-status-button")
        readStatusBtn.textContent = "Mark" + readStatusCheck(book.read)
        buttons.appendChild(readStatusBtn)

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-button")
        deleteBtn.textContent = "Delete"
        buttons.appendChild(deleteBtn)

        card.appendChild(buttons)

        let readingStatus= document.createElement("div")
        readingStatus.classList.add("reading-status")
        readingStatus.textContent = book.read
        card.appendChild(readingStatus)

        bookcards.appendChild(card)
    }
}


var modal = document.getElementsByClassName("modal")[0]
var addbtn = document.getElementsByClassName("add-button")[0];
var span = document.getElementsByClassName("close")[0]


addbtn.onclick = function() {
  modal.style.display = "block"
}

span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

//Get info from form to add to list of books.