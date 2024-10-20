import { CreateDiaryEntry } from '../types'

import { Weather, Visibility } from '../enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) throw new Error('Incorrect or missing comment')
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) throw new Error('Incorrect or missing date')
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) throw new Error('Incorrect or missing weather')

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) throw new Error('Incorrect or missing visibility')

  return visibilityFromRequest
}

const isString = (incomingString: any): boolean => {
  return typeof incomingString === 'string' || incomingString instanceof String
}

const isDate = (incomingDate: any): boolean => {
  return Boolean(Date.parse(incomingDate))
}

const isWeather = (incomingWeather: any): boolean => {
  return Object.values(Weather).includes(incomingWeather)
}

const isVisibility = (incomingVisibility: any): boolean => {
  return Object.values(Visibility).includes(incomingVisibility)
}

export const toNewDiaryEntry = (objectReq: any): CreateDiaryEntry => {
  const newDiaryEntry: CreateDiaryEntry = {
    comment: parseComment(objectReq.comment),
    date: parseDate(objectReq.date),
    weather: parseWeather(objectReq.weather),
    visibility: parseVisibility(objectReq.visibility)
  }

  return newDiaryEntry
}
