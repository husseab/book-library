const express = require('express');
const BookController = require('../controllers/book');

const router = express.Router();

router.post('/', BookController.create);
router.get('/', BookController.read);
router.get('/:id', BookController.readById);
router.patch('/:id', BookController.update);
router.delete('/:id', BookController.delete);

module.exports = router;