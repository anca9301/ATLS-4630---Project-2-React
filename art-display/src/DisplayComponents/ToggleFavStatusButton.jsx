import { useContext } from "react"
import { FavoriteIndexesContext } from "../Context/FavoriteIndexesContext"

import favoriteIcon from '../assets/favoriteIcon.png'
import unfavoriteIcon from '../assets/unfavoriteIcon.png'

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
        <img
        className='favorite-button'
        src = {favoriteIndexes.includes(artId) ? favoriteIcon : unfavoriteIcon}
        alt="favorite status"
        onClick={(e)=>{updateFavorites(artId)}}
        />
    )
}