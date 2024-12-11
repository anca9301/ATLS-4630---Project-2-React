import { useContext } from "react"
import { ArtDisplayIndexContext } from "../Context/ArtDisplayIndexContext"

export default function ArtResultItem({artData}) {
    const {artDisplayIndex, setArtDisplayIndex} = useContext(ArtDisplayIndexContext)

    return (
        <button onClick={(e)=> {setArtDisplayIndex(artData.id)}}>
            {artData.title}
        </button>
    )
}