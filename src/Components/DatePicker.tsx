import { Input } from "@nextui-org/react"

export default function DatePicker(props: {
    date: Date, dateChanged: any,
    label: string
}) {
    const prefixWithZero = (x: number) => x >= 10 ? x.toString() : `0${x}`

    const getDateValue = (date: Date) => {
        return `${date.getFullYear()}-${prefixWithZero(date.getMonth() + 1)}-${prefixWithZero(date.getDate())}`
    }

    const dateChanged = (date: string) => {
        const parts = date.split('-');
        const parsedDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        props.dateChanged(parsedDate)
    }

    return <Input type="date" label={props.label} value={getDateValue(props.date)} onValueChange={dateChanged} />
}