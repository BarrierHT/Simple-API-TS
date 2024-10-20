import { CreateDiaryEntry, DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from '../data/diaries.json'

// ".tsx" , ".ts", ".node" , ".js" , ".json"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getDiaries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getDiariesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: CreateDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
