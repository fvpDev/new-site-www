export function formatDate(date) { return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }) }
export function formatMonth(month) { return month < 10 ? `0${month}` : `${month}` }

export function getProperAgeMaxBirthday() {
  let date = new Date()
  date.setFullYear(date.getFullYear() - 21)
  return formatDate(new Date(date))
}
