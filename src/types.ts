import type { Document } from 'mongoose'

export interface Match {
  id: string
  date: string
  team1: string
  team2: string
  goals1: number
  goals2: number
}

export interface Player {
  name: string
  matches: number
  score: number
}

export interface Contact extends Document {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}
