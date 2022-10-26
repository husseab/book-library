const { Reader, Book } = require('../models')

const getModel= (model) => {
    const models = {
        book: Book,
        reader: Reader
    }
    return models[model]
}


