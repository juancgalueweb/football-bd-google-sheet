import type { IRoutesStats } from '@/types'
import { model, models, Schema } from 'mongoose'

const routesStatsSchema = new Schema<IRoutesStats>(
  {
    routesStats: {
      type: Map,
      of: Number,
      default: new Map<string, number>()
    }
  },
  { timestamps: true }
)

export default models.RoutesStats ??
  model<IRoutesStats>('RoutesStats', routesStatsSchema)
