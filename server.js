
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection


const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp'
const PORT = process.env.PORT || 3000


mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)


db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))


app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.use(express.static('public'))



app.get('*', (req, res) => {
  res.status(404).json('Page Not Found')
})

app.listen(3000, () => {     console.log('listening...'); 

}); 

