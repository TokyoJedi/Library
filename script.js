
document.addEventListener("DOMContentLoaded", () => {
    console.clear();
    const myLibrary = [];
    const bookShelf = document.getElementById('bookShelf');
    const dialog = document.getElementById('dialog');
    const submit = document.getElementById('submit');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readInput = document.getElementById('read');

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = () => {
            return `${this.title} by ${this.author}, 
        ${this.pages} pages, ${read ? "read" : "not read yet"}`
        };
    }

    addBookToLibrary = (...aBook) => {
        // console.log(...aBook);
        return myLibrary.push(new Book(...aBook))
    }

    // addBookToLibrary = (title, author, pages, read) => {
    //     return myLibrary.push({
    //         "title": title,
    //         "author": author,
    //         "pages": pages,
    //         "read": read,
    //     })
    // }

    addBook.addEventListener("click", (e) => {
        dialog.showModal();
    });

    dialog.addEventListener("close", (e) => {
        e.preventDefault();
        newBook = dialog.returnValue.split(',');
        console.log(newBook[0]);
        console.log(myLibrary[0].title);


        if (dialog.returnValue === "default") return;

        myLibrary.forEach((thisBook) => { result = thisBook.title === newBook[0] });
        console.log(`The result is ${result}`);
        if (result) {
            return console.log('Book already exists.');
        }

        addBookToLibrary(...newBook);
        updateLibrary();

    });

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        dialog.close(titleInput.value + ',' + authorInput.value + ',' + pagesInput.value + ',' + readInput.value);
    });

    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
    addBookToLibrary("Fellowship of The Ring", "J.R.R. Tolkien", 295, false);
    addBookToLibrary("The Twin Towers", "J.R.R. Tolkien", 295, false);
    addBookToLibrary("The Return of The King", "J.R.R. Tolkien", 295, false);

    updateLibrary = () => {
        myLibrary.forEach((book) => {
            let result = null;
            // const result = myLibrary.find(({ title }) => title === book.title);
            Array.from(bookShelf.children).forEach(element => {
                if (result !== true) {
                    if (bookShelf.firstChild === element) {
                        return
                    }
                    if (element.classList.value === "book") {
                        console.log(element.textContent);
                        return result = book.title === element.textContent
                    }
                }
            });

            if (result) {
                console.log(`The result is ${result}`);
                console.log('Book already exists.');
                return
            }

            let newCard = document.createElement('div');
            let cardBody = document.createElement('div');
            // cardBody.classList.add('cardBody');
            // cardBody.textContent = book.author;
            newCard.classList.add('book');
            bookShelf.appendChild(newCard);
            newCard.textContent = book.title;
            newCard.appendChild(cardBody);

            // console.clear();

        })
        console.table(myLibrary);
    };

    updateLibrary();

});


// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

// console.log(theHobbit.info());