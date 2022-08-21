const Books = require("../models/books.models");
const ValidateBook = require("../validation/books.validation");
const upload = require("../util/upload");
const uploadImage = upload.single("image");
const path = require("path");
const fs = require("fs");
const Addbook = async (req, res) => {
    
    const { errors, isValid } = ValidateBook(req.body);
  
      try {
        uploadImage(req, res, async function (err) {
          const { errors, isValid } = ValidateImage(req);
          if (err) {
            errors.image = err.message;
            return res.status(404).json(errors);
          } else {
            if (!isValid) {
              return res.status(404).json(errors);
            } else {
              const image = {
                title: req.body.title,
                image: req.file.filename,
                path: process.env.BASE_URL + "/images/" + req.file.filename,
              };
              await Image.create(image);
              await Image.find().then((result) => {
                res.status(200).json(result);
              });
            }
          }
        });
      } catch (error) {
        res.status(500).json({ message: err.message });
      }
}
const Findallbooks = async (req, res) => {

    try {
        const data = await Books.find();
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const FindSingbook = async (req, res) => {

    try {
      await Image.find().then((result) => {
        res.status(200).json(result);
      });
    } catch (error) {
      res.status(500).json({ message: err.message });
    }
}


  

module.exports = {
    Addbook, Findallbooks, FindSingbook, Updatebook, Deletebook
}