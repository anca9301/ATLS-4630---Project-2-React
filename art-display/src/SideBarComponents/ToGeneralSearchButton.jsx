import { useContext } from "react"
import { FilterFavoritesContext } from '../Context/FilterFavoritesContext'

import searchIcon from '../assets/searchIcon.png'

export default function ToGeneralSearchButton() {
    const {filterFavorites, setFilterFavorites} = useContext(FilterFavoritesContext)

    return (
        <img
        className="sidebar-button"
        src={searchIcon}
        alt="search icon"
        onClick={(e)=> setFilterFavorites(false)}
        />
    )
}