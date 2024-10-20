import express from 'express'

import * as diaryServices from '../services/diaryServices'
import { toNewDiaryEntry } from '../utils/validation'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getDiariesWithoutSensitiveInfo())
})

router.get('/:id', async (req, res): Promise<any> => {
  const diary = diaryServices.findById(+req.params.id)

  if (diary == null) return res.sendStatus(404)
  return res.send(diary)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const createdDiary = diaryServices.addDiary(
      newDiaryEntry
    )
    res.json(createdDiary)
  } catch (err: any) {
    res.status(400).send(err.message)
  }
})

export default router
