import { useContext } from "react"
import { InputStartDateContext } from "../Context/InputStartDateContext"

export default function inputStartDate() {
    const {filterStartDate, setFilterStartDate} = useContext(InputStartDateContext)
    const curYear = new Date().getFullYear()

    return (
        <input 
        type="number"
        className="input-date"
        min= {0}
        max={curYear}
        value={filterStartDate}
        placeholder="YYYY"
        pattern="\d*"
        onChange={(e)=> setFilterStartDate(e.target.value)}
        />
    )
}