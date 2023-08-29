export default function getSlashedDate(date: number): string{
    const dateObj = new Date(date)
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()

     return `${month}/${day}/${year}`
}