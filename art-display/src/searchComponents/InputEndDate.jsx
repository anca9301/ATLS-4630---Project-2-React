import { useContext } from "react"
import { InputEndDateContext } from "../Context/InputEndDateContext"


export default function InputEndDate() {
    const {filterEndDate, setFilterEndDate} = useContext(InputEndDateContext)
    const curYear = new Date().getFullYear()

    return (
        <input 
        type="number"
        className="input-date"
        min= {0}
        max={curYear}
        value={filterEndDate}
        placeholder="YYYY"
        pattern="\d*"
        onChange={(e)=> setFilterEndDate(e.target.value)}
        />
    )
}