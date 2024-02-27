
export interface tracking {
  title: string
  timeframes: Timeframes
}

export interface Timeframes {
  daily: timeFormat
  weekly: timeFormat
  monthly: timeFormat
}


export type modeTime = 'daily' | 'weekly' | 'monthly'


export interface timeFormat {
  current: number
  previous: number
}
