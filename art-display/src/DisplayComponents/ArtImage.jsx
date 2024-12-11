import { useState } from 'react'
import { useEffect } from 'react'

export default function ArtImage({imageID}) {
    const [image, setImage] = useState(null)
    
    //513f71f2-18d3-7d99-25a3-d9d1110bf729
    useEffect(() => {
        async function fetchImage() {
            const response = await fetch('https://www.artic.edu/iiif/2/513f71f2-18d3-7d99-25a3-d9d1110bf729/full/400,/0/default.jpg')
            const json = await response.blob()
            const imageURL = URL.createObjectURL(json); //creates the URL from the blob object thing
            setImage(imageURL)
            //console.log(imageURL)
        }
        fetchImage()
    }, [])

    return (
        <div className="display-image-container">
        <img className='display-image' src={image}/>
        </div>
    )
}