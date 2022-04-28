//require the router and db items needed
const path = require("path");
const router = require("express").Router();
const store = require("../db/store")
const uuid = require("uuid");
const { sendfile } = require("express/lib/response");

//set up a get/post/delete methods as responses to the database
router.get('/', (req , res) =>{
    console.info("recieved notes")
    store.read("./db/db.json").then(res.sendfile))
});
//TO DO read the send file part of the express npm
router.post('/', (req, res) =>{
    console.info("recieved add tip");

    const{title, text}= req.body;
    if(req.body){
        const newNote ={
            title,
            text,
            note_id: uuid
        };
        store.write(newNote, "../db/db.json");
        res.json("note added successfully");
    } else{
        res.error("error adding note")
    }
})
//export the router
module.exports = router