const { Schema, model, now} = require("mongoose");


const BooSchema = new Schema({
    title:{type: String, required:true},
    author:{type: String, required:true},
    isbn:{type: String, required:true},
    imagepath:{type: String},
    created_at:{type: Date, default: Date.now}
});


module.exports = model("Book",BooSchema);