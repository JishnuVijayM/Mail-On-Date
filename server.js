const express = require('express')
const app = express()

app.use(express.json())

const reminderRoutes = require('./routes/reminderRoutes');

app.use("/",reminderRoutes)

app.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000')
});






