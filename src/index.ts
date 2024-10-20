import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/api/diaries', diaryRouter)

app.get('/ping', (_, res) => {
  console.log('Someone pinged here ')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`)
})
