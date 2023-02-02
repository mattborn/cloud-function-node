const cors = require('cors')({ origin: true })
const fetch = require('node-fetch-commonjs')
const functions = require('@google-cloud/functions-framework')

functions.http('hello', (req, res) => {
  cors(req, res, () => {
    try {
      fetch('https://dummyjson.com/products/1')
        .then((response) => response.json())
        .then((json) => res.send(json))
        .catch((error) => res.status(500).send(error))
    } catch (error) {
      res.status(500).send(error)
    }
  })
})
