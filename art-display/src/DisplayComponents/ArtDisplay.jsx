import ArtHeader from './ArtHeader'
import ArtImage from './ArtImage'
import ArtOriginDate from './ArtOriginDate'
import ArtDescription from './ArtDescription'
import '../css/display.css'

export default function ArtDisplay({artData}) {

    // console.log(artData)

    return (
        <div
        className='art-display'>
            <ArtHeader 
            artId={artData.id} 
            title={artData.title}
            artist={artData.artist}/>
            <ArtImage
            imageID={artData.image_id}
            />
            <ArtOriginDate
            origin={artData.placeOfOrigin}
            dateStart={artData.dateStart}
            dateEnd={artData.dateEnd}/>
            <ArtDescription
            desc={artData.desc}/>
        </div>
    )
}