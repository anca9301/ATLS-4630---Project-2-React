import { useContext } from "react"
import { InputOriginContext } from "../Context/InputOriginContext"


export default function OriginDropdown({availableOrigins}) {
    const {filterOrigin, setFilterOrigin} = useContext(InputOriginContext)

    const allOptions = []
    availableOrigins.forEach(item => {
        allOptions.push(<option value={item}>{item}</option>)
    })

    return (
        <form className="origin-dropdown">
            <label htmlFor="origin">Place of Origin:</label>
            <select id="origin" name="origin"
            value={filterOrigin}
            onChange={(e)=> setFilterOrigin(e.target.value)}
            >
                {allOptions}
            </select>
        </form>
    )
}