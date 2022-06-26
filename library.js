const myLibrary = []
let modal = document.getElementsByClassName('modal')[0]
let span = document.getElementsByClassName('close')[0]
let addBtn = document.getElementsByClassName('add-button')[0];
let submitBtn = document.getElementsByClassName('submit-input')[0];

// function Book(author, title, pages, read){
//   this.author = author;
//   this.title = title;
//   this.pages = pages;
//   this.read = read;
//   this.toggleRead = function(readValue){
//     this.read = !readValue;
//   }
// }

class Book {
  constructor(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(author, title, pages, read){
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
  console.log(myLibrary.length);
}

function deleteBookToLibrary(titleToDelete){
  for(let i = 0; i < myLibrary.length; i++){
    if(myLibrary[i].title === titleToDelete){
      myLibrary.splice(i,1);
      break;
    }
  }
}

function readStatusCheck(readStatus){
  return readStatus ? 'Unread' : 'Read';
}

function displayBooks() {
  let bookcards = document.getElementsByClassName('bookcards')[0];
  while (bookcards.firstChild) {
    bookcards.removeChild(bookcards.firstChild);
  }

  myLibrary.forEach((book) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = book.title;
    card.appendChild(title);

    let author = document.createElement('div');
    author.classList.add('author');
    author.textContent = book.author;
    card.appendChild(author);

    let numberOfPages = document.createElement('div');
    numberOfPages.classList.add('pages');
    numberOfPages.textContent = book.pages;
    card.appendChild(numberOfPages);

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let readStatusBtn = document.createElement('button');
    readStatusBtn.classList.add('read-status-button');
    readStatusBtn.textContent = 'Mark ' + readStatusCheck(book.read);
    readStatusBtn.addEventListener('click', () => {
      book.toggleRead()
      displayBooks();
    });
    buttons.appendChild(readStatusBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteBookToLibrary(book.title);
      displayBooks();
    });
    buttons.appendChild(deleteBtn);

    card.appendChild(buttons);

    let readingStatus= document.createElement('div');
    readingStatus.classList.add('reading-status');
    if(book.read == true){
      readingStatus.setAttribute('style', 'color: #44ff33;');
      readingStatus.textContent = readStatusCheck(!book.read);
    }
    else{
      readingStatus.setAttribute('style', 'color: #ff3333;');
      readingStatus.textContent = readStatusCheck(!book.read);
    }
    card.appendChild(readingStatus);

    bookcards.appendChild(card);
  });
}

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});

addBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

submitBtn.addEventListener('click', () => {
  let author = document.getElementById('author-input');
  let title = document.getElementById('title-input');
  let pages = document.getElementById('pages-input');
  let read = document.getElementById('read-status-input');
  addBookToLibrary(author.value, title.value, pages.value, read.checked);
  author.value = '';
  title.value = '';
  pages.value = '';
  read.checked = false;
  modal.style.display = 'none';
  displayBooks();
});