import BookService from "./services/bookservice";
const bookservice = new BookService();

import { format } from "timeago.js";

class UI {

    async renderBooks(){
       const books = await bookservice.getBooks();
       const bookcardscontainer = document.getElementById("books-cards");
       bookcardscontainer.innerHTML = "";
       books.forEach(book =>{
       const div = document.createElement("div");
       div.className = "";                                      
       div.innerHTML = `
            <div class="card" m-2>
                <div class="row">
                    <div class="col-md-4">
                    <img src="http://localhost:3000${book.imagepath}" alt="" class="img-fluid"/>   
                    </div>
                    <div class="col-md-8">
                        <div class="card-block px-2">
                            <h4 class="card-title">${book.title}</h4>
                            <p class="card-text">${book.author}</p>
                            <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                        </div>
                    
                    </div>
                </div>
                <div class="card-footer">
                ${format(book.created_at)}
                </div>
            </div>
       `;

       bookcardscontainer.appendChild(div);
       })
    }


    async addNewBook(book){
        await bookservice.postBooks(book);
        this.ClearBookForm();
        this.renderBooks();
    }


    ClearBookForm(){
        document.getElementById("book-form").reset();
    }


    renderMessage(){}

    async deleteBook(bookId){

        bookservice.deleteBooks(bookId);
        this.renderBooks();
    }
}




export default UI;