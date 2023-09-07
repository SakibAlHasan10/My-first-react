 
 import Book from "./Book"
 export default function BookList({books}){
    // console.log(books[0])
    return (
        <div >
            {
                books.map(book => <Book book={book}></Book> )
            }
        </div>
    )
 }