import { useContext } from "react"
import { FavoriteIndexesContext } from "../Context/FavoriteIndexesContext"

export default function ToggleFavStatusButton({artId}) {
    const {favoriteIndexes, setFavoriteIndexes} = useContext(FavoriteIndexesContext)

    function updateFavorites(newIdx) {
        if (favoriteIndexes.includes(newIdx)) {
          setFavoriteIndexes(favoriteIndexes.filter(idx => idx !== newIdx))
        }
        else {
            return setFavoriteIndexes([...favoriteIndexes, newIdx])
        }
    }

    return (
        <button 
        onClick={(e)=>{updateFavorites(artId)}}>
            { favoriteIndexes.includes(artId) ? 'Unfavorite' : 'Favorite'}
        </button>
    )
}