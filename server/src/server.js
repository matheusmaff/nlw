const express = require('express')

const app = express()

app.get('/ads', (request, response) => {
    response.json({dedezera:'fodaum'})
})

app.listen(3333)