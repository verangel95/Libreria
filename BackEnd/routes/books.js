const {Router} = require("express");
const router = Router();
const fs = require("fs-extra")
const path = require("path")

const book = require("../models/Books");

router.get("/", async (req,res)=>{
    const books = await book.find();
    res.json(books);
});

router.post("/", async (req,res) =>{
    
    const {title, author, isbn} = req.body
    const imagepath = "/uploads/" + req.file.originalname;
   const newbook = new book({title,author,isbn,imagepath});
    await newbook.save();
    res.json({"message": "Book saved"});
    
})


router.delete("/:id",async (req,res) =>{
    const bookdeleted = await book.findByIdAndDelete(req.params.id);
    // fs.unlink(path.resolve("./BackEnd/public/" + bookdeleted.imagepath))
    res.json({"message": "Book deleted"});
})


module.exports = router;