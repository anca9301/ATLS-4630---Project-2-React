import { useContext } from "react"
import { FilterFavoritesContext } from '../Context/FilterFavoritesContext'

export default function FilterFavButton() {
    const {filterFavorites, setFilterFavorites} = useContext(FilterFavoritesContext)

    return (
        <button 
        className="filter-favorite-button"
        onClick={(e)=> setFilterFavorites(true)}>
        </button>
    )
}