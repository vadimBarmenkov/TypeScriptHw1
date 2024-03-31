type book = Book;

abstract class BooksRepository{

    books: Book[];

    createBook(book: Book) : void{

}

    getBook(id: number) : Book{
        this.books.map((el) => {
            if(el.id === id){
                return el;
            }
        })
    };

    getBooks() : Book[]{
        return this.books;
    };

    updateBook(id: number) : void{

    };

    deleteBook(id: number) : void{
        this.books.map((el) => {
            if(el.id === id){
                this.books.slice(this.books.indexOf(el));
            }
        })
    };

}