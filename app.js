const div = document.querySelector('div');

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
        let newDiv = document.createElement('div');
        newDiv.classList.add('card');
        let newPara = document.createElement('p')
        // newLI.classList.add('liBook');

       
        newPara.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages`

        div.appendChild(newDiv)
        newDiv.appendChild(newPara);
    } }


    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page
    
        const inTitle = document.getElementById('input-title').value;
        const inAuthor = document.getElementById('input-author').value;
        const inPages = document.getElementById('input-pages').value;
    
        console.log(inTitle);
        addBookToLibrary(inTitle, inAuthor, inPages);
        displayLastBook();

            // Reset input fields
        document.getElementById('input-title').value = "";
        document.getElementById('input-author').value = "";
        document.getElementById('input-pages').value = "";

    });

    function displayLastBook() {
        const lastItem = myLibrary[myLibrary.length -1]; 

       const lastBook = document.createElement('div');
       lastBook.classList.add('card');
       lastBook.textContent = `${lastItem.title} by ${lastItem.author}, ${lastItem.pages} pages`;
       div.appendChild(lastBook);
    }


addBookToLibrary('Home Alone', 'John Hughes', 224);
addBookToLibrary('Home Alone 2', 'John Hughes', 500);
addBookToLibrary('Christmas', 'Hughes Jane', 560);
addBookToLibrary('Easter', 'Hughes Jane', 550);

displayBooklist();


console.log(myLibrary);