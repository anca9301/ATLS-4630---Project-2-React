import { useContext } from "react"
import { InputOriginContext } from "../Context/InputOriginContext"


export default function OriginDropdown() {
    const {filterOrigin, setFilterOrigin} = useContext(InputOriginContext)

    return (
        <form>
            <label htmlFor="origin">Place of Origin:</label>
            <select id="origin" name="origin"
            value={filterOrigin}
            onChange={(e)=> setFilterOrigin(e.target.value)}
            >
                <option value=""/>
                <option value="Italy">Italy</option>
                <option value="England">England</option>
                <option value="France">France</option>
            </select>
        </form>
    )
}