
import express from 'express'
import { movies } from './data.js'

let app = express()
app.use(express.json())








app.listen(5000,()=>{
    console.log('this is port number 5000')
})