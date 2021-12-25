import express from "express";
import router from './routes/index.js';

const app = express()
const PORT = 3000
app.use('/api', router);

app.use('*', (req, res) => {
    res.status(404).send('Not Found : ( ')
})

app.listen(PORT, () => {
	console.log(` app listening at http://localhost:${PORT}`)
})

