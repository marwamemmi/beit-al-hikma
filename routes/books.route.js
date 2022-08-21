const express = require('express');
const { Addbook, Findallbooks, FindSingbook, Updatebook, Deletebook } = require('../controllers/books.controller');
const router = express.Router()


router.post('/books', Addbook )

router.get('/books', Findallbooks)

router.get('/books/:id', FindSingbook )

router.put('/books/:id',Updatebook )

router.delete('/books/:id', Deletebook)



module.exports = router;