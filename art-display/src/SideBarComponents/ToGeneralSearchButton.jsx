import { useContext } from "react"
import { FilterFavoritesContext } from '../Context/FilterFavoritesContext'

export default function ToGeneralSearchButton() {
    const {filterFavorites, setFilterFavorites} = useContext(FilterFavoritesContext)

    return (
        <button 
        className="sidebar-button"
        onClick={(e)=> setFilterFavorites(false)}>
        </button>
    )
}