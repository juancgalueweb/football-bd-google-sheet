/* eslint-disable no-var */
import mongoose from 'mongoose'
declare global {
  var mongoose: any
}

const LOCAL_DB = process.env.LOCAL_DB_URL!
const DEPLOYMENT_DB = process.env.MONGO_URI!
const MONGODB_URI =
  process.env.NODE_ENV === 'production' ? DEPLOYMENT_DB : LOCAL_DB

if (!MONGODB_URI) {
  throw new Error(
    'Por favor, define la varialbe de entorno LOCAL_DB y DEPLOYMENT_DB en .env'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
