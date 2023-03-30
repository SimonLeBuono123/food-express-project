import express from 'express';

const api = express()

const port = 3030;

api.listen(port, ()=> {
    console.log(`listening in on http://localhost:${port}`)
} )