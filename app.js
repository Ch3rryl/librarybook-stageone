const ul = document.querySelector('ul');

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayBooklist() {
    for (i = 0; i < myLibrary.length; i++) {
        let newLI = document.createElement('li')
        // newLI.classList.add('liBook');
        newLI.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages`

        ul.appendChild(newLI);
    } }


addBookToLibrary('Home Alone', 'John Hughes', 224);
addBookToLibrary('Home Alone 2', 'John Hughes', 500);
addBookToLibrary('Christmas', 'Hughes Jane', 560);

displayBooklist();


console.log(myLibrary);