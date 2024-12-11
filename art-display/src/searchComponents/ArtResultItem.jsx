import { useContext } from "react"
import { ArtDisplayIndexContext } from "../Context/ArtDisplayIndexContext"

export default function ArtResultItem({artData}) {
    const {artDisplayIndex, setArtDisplayIndex} = useContext(ArtDisplayIndexContext)

    return (
        <button 
        className= {artDisplayIndex == artData.id ? "result-item-selected" : "result-item"}//"result-item"
        onClick={(e)=> {setArtDisplayIndex(artData.id)}}>
            {artData.title}
        </button>
    )
}