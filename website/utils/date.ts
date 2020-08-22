const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

const nth = (day) => {
  if (day > 3 && day < 21) return `${day}th`

  const firstPlace = day % 10
  if (firstPlace === 1) return `${day}st`
  if (firstPlace === 2) return `${day}nd`
  if (firstPlace === 3) return `${day}rd`

  return `${day}th`
}

export const formatDate = (date: Date) =>
  `${monthNames[date.getMonth()]} ${nth(date.getDate())}, ${date.getFullYear()}`

export const formatDateShort = (date: Date) =>
  `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(
    2,
    '0'
  )}-${`${date.getDate()}`.padStart(2, '0')}`
