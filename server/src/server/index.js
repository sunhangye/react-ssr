import express from 'express'
import { render } from './utils';
const app = express()
app.use(express.static('public'))


app.get('*', (req, res) => {


  res.send(render(req))
})

app.listen(8000, () => {
  console.log('express listen on 8000')
})