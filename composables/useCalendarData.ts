import {
  add,
  format,
  getDaysInMonth,
  getMonth,
  getYear,
  getDay,
  parse,
  isBefore,
  isSameDay,
  getWeeksInMonth,
  startOfMonth,
  endOfMonth,
} from 'date-fns'

interface CalendarMonth {
  index: number
  days: number
  month: number
  weeks: number
  year: number
  startIndex: number
  monthLabel: string
  yearMonth: string
}
interface CalendarSegment {
  count: number
  index: number
  text: string
  type: string
  date: Date | null
  isWeekend: boolean
}
export const useCalendarData = () => {
  const DISPLAY_SEGMENTS = 39
  const TOTAL_SEGMENTS = 48

  const createCalendar = function (startDate: string, endDate: string): CalendarMonth[] {
    const start = parse(startDate, 'yyyy-MM-dd', new Date())
    const end = endDate != '' ? parse(endDate, 'yyyy-MM-dd', new Date()) : add(start, { years: 1 })

    let counter = 0
    const calendar: CalendarMonth[] = []
    let index = startOfMonth(start)

    while (isBefore(index, endOfMonth(end))) {
      let firstDayOfMonth = startOfMonth(index);
      let firstDayOfMonthIndex = getDay(firstDayOfMonth)
      calendar.push({
        index: counter++,
        days: getDaysInMonth(index),
        weeks: getWeeksInMonth(index),
        month: getMonth(index),
        year: getYear(index),
        startIndex: firstDayOfMonthIndex,
        monthLabel: format(index, 'MMMM yyyy'),
        yearMonth: format(index, 'yyyy-MM'),
      })
      index = add(index, { months: 1 })
    }

    return calendar
  }

  function getDaySlug(itemDate: Date | null) {
    return itemDate ? format(itemDate, 'dd') : ''
  }

  function createSegments(today: Date, month: any) {
    const segments: CalendarSegment[] = []
    const { startIndex } = month

    for (let i = 0; i <= TOTAL_SEGMENTS; i++) {
      let date: Date | null = null
      let type = 'none'
      let isWeekend = false

      if (i < startIndex) {
        type = 'void'
      }
      else if (i < (month.days + startIndex)) {
        date = new Date(month.year, month.month, (i - startIndex) + 1)

        const day = getDay(date)
        isWeekend = (day === 6) || (day === 0)
        if (isSameDay(date, today)) {
          type = 'today'
        }
        else {
          type = 'inactive'
        }
      }
      else if (i <= DISPLAY_SEGMENTS) {
        type = 'void'
      }

      segments.push({
        count: (100 / 40),
        index: month.index,
        text: getDaySlug(date),
        type,
        date,
        isWeekend,
      })
    }

    return segments
  }
  function findSegment(calendar: any[], data: any[], date: Date) {
    const monthIdx = calendar.findIndex(x => (
      x.year === getYear(date) && x.month === getMonth(date)
    ))
    if (monthIdx >= 0) {
      const dayIdx = calendar[monthIdx].startIndex + date.getDate() - 1
      if (dayIdx >= 0 && dayIdx < data[monthIdx].length) {
        return data[monthIdx][dayIdx]
      }
    }
    return null
  }

  return {
    createCalendar,
  }
}
