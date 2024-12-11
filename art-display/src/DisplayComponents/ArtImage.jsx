import { useState } from 'react'
import { useEffect } from 'react'

export default function ArtImage({imageID}) {
    const [image, setImage] = useState(null)
    //console.log(imageID)
    
    //513f71f2-18d3-7d99-25a3-d9d1110bf729
    useEffect(() => {
        async function fetchImage() {
            let response = await fetch(`https://www.artic.edu/iiif/2/${imageID}/full/400,/0/default.jpg`)
            let json = await response.blob()
            let imageURL = URL.createObjectURL(json); //creates the URL from the blob object thing
            setImage(imageURL)
            //console.log(imageURL)
        }
        fetchImage()
    }, [imageID]) //this was extremely necessary

    return (
        <div className="display-image-container">
        <img className='display-image' src={image}/>
        </div>
    )
}