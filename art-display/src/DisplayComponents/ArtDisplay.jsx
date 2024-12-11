import ArtHeader from './ArtHeader'
import ArtImage from './ArtImage'
import ArtOriginDate from './ArtOriginDate'
import ArtDescription from './ArtDescription'
import './display.css'

export default function ArtDisplay({artData}) {

    // console.log(artData)

    return (
        <div
        className='art-display'>
            <ArtHeader 
            artId={artData.id} 
            title={artData.title}
            author={artData.author}/>
            <ArtImage/>
            <ArtOriginDate/>
            <ArtDescription/>
        </div>
    )
}