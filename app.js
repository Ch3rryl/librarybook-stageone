const ul = document.querySelector('ul');
// const button = document.querySelector('button');


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



    document.querySelector('button').addEventListener('click', () => {
        const inTitle = document.querySelector('input-title');
        const inAuthor = document.querySelector('input-author');
        const inPages= document.querySelector('input-pages');

        let newEntry = document.createElement('li') 
        newEntry.textContent = `${inTitle} by ${inAuthor}, ${inPages} pages`
        
        console.log("help!!!")
        ul.appendChild(newEntry);
    }
    
    )







addBookToLibrary('Home Alone', 'John Hughes', 224);
addBookToLibrary('Home Alone 2', 'John Hughes', 500);
addBookToLibrary('Christmas', 'Hughes Jane', 560);

displayBooklist();


console.log(myLibrary);