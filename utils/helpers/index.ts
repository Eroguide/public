import { format } from 'date-fns'
export const numberWithSpaces = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const getTodayString = (): string => {
  const dayIndex = new Date().getDay()

  return (
    [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][dayIndex].toUpperCase() || ''
  )
}

export const getDateMonthAgo = (): string => {
  const today = new Date()
  const priorDate = new Date(new Date().setDate(today.getDate() - 30))

  return format(priorDate, 'yyyy-MM-dd')
}

export const getDateEndOfToday = (): string => {
  const tomorrow = new Date()
  return format(tomorrow.setHours(24, 0, 0, 0), 'yyyy-MM-dd')
}
