import type { Document } from 'mongoose'

// Interfaces that extends Document from mongoose
export interface Contact extends Document {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  formMessages: string[]
  routes: Map<string, number>
}

export interface IRoutesStats extends Document {
  routesStats: Map<string, number>
}

// Interfaces that does not extends Document from mongoose
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

export interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  formMessage: string
}

export interface SendData extends FormData {
  pathname: string
}

export interface ContactFormProps {
  pathname: string
}
