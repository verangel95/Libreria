class BookService {

    constructor(){
        this.URI = "http://localhost:3000/api/books"
    }

    async getBooks(){
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBooks(book){
        const res = await fetch(this.URI,{
            method: "POST",
            body: book
        });

       const data =  await res.json();
       console.log(data);

    }

    async deleteBooks(bookId){
        const res = await fetch(`${this.URI}/${bookId}`,{
            headers: {
                "content-type" : "aplication/json"
            },
            method: "DELETE"
        });

        const data =  await res.json();
        console.log(data);
    }

}

module.exports = BookService;