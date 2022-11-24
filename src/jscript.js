class Book{
    constructor(title, genre, author, read, readDate) {
        this._title = title;
        this._genre = genre;
        this._author = author;
        this._read = read;
        this._readDate = readDate; 
    }
}
const newBook = new Book("Catch-22", "War", "Joseph Heller", false, "DummyDate");

console.log(newBook._title);

class BookList {
    constructor() {
        this._books = [];
        this._numberOfBooksRead = numberOfBooksRead;
        this._numberOfBooksNotRead = 0;
        this._currentBook = null;
        this._nextBook = null;
        this._lastBook = null;
    }

    updateNumberOfBooksRead() {
        this._numberOfBooksRead = this._books.filter(
            book => book._read === true).length;
    }

    updateNumberOfBooksNotRead() {
        this._numberOfBooksNotRead = this._books.filter(
            book => book._read === false).length;
    }

    add(book) {
        this._books.push(book);
        this._updateCurrentBook();
        this._updateNumberOfBooksRead();
        this._updateNumberOfBooksNotRead();
    }

    updateCurrentBook() {
        this._currentBook = this._books[this._numberOfBooksRead];
        this._nextBook = this._books[this._numberOfBooksRead + 1];
        this._lastBook = this._books[this._numberOfBooksRead - 1];
        this._updateNumberOfBooksRead();
        this._updateNumberOfBooksNotRead();
    }

    finishiCurrentBook() {
        this._currentBook._read = true;
        this._currentBook._readDate = new Date(Date.now());
        this._numberOfBooksRead++;
        this._numberOfBooksNotRead--;
        this._currentBook = this._nextBook;
        this._nextBook = this._books[this._numberOfBooksRead];
        this._lastBook = this._books[this._numberOfBooksRead - 1];
    }
}
