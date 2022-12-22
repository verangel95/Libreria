
require("./styles/styles.css")
import UI from "./UI";


document.addEventListener("DOMContentLoaded", () =>{
    const ui = new UI();
    ui.renderBooks();
})

document.getElementById("book-form")
                                    .addEventListener("submit",(e)=>{

                                        const title = document.getElementById("title").value;
                                        const author = document.getElementById("author").value;
                                        const isbn = document.getElementById("isbn").value;
                                        const image = document.getElementById("image").files;

                                        const formdata = new FormData();
                                        formdata.append("image",image[0]);
                                        formdata.append("title",title);
                                        formdata.append("author",author);
                                        formdata.append("isbn",isbn);


                                        const ui = new UI();
                                        ui.addNewBook(formdata);

                                        e.preventDefault();

                                    });



document.getElementById("books-cards")
                                        .addEventListener("click",e =>{

                                            if(e.target.classList.contains("delete")){
                                                const ui = new UI;
                                                ui.deleteBook(e.target.getAttribute("_id"))
                                            }
                                            e.preventDefault();
                                        })