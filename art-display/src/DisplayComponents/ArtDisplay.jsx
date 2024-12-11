import ArtHeader from './ArtHeader'
import ArtImage from './ArtImage'
import ArtOriginDate from './ArtOriginDate'
import ArtDescription from './ArtDescription'

export default function ArtDisplay({artData}) {

    // console.log(artData)

    return (
        <div>
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