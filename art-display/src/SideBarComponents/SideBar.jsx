import ToGeneralSearchButton from "./ToGeneralSearchButton"
import FilterFavButton from "./FilterFavButton"
import './sidebar.css'

export default function SideBar() {

    return (
        <div className="sidebar">
            <ToGeneralSearchButton/>
            <FilterFavButton/>
        </div>
    )
}