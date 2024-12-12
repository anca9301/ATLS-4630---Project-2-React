import { useContext } from "react"
import { FilterFavoritesContext } from '../Context/FilterFavoritesContext'
import favoriteIcon from '../assets/favoriteIcon.png'

export default function FilterFavButton() {
    const {filterFavorites, setFilterFavorites} = useContext(FilterFavoritesContext)

    return (
        <img
        className="sidebar-button"
        src={favoriteIcon}
        alt="orange star"
        onClick={(e)=> setFilterFavorites(true)}
        />
    )
}