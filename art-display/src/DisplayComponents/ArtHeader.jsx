import ArtTitleArtist from './ArtTitleArtist'
import ToggleFavStatusButton from './ToggleFavStatusButton'

export default function ArtHeader({artId, title, artist}) {
    return (
        <div className='display-header'>
            <ArtTitleArtist title={title} artist={artist}/>
            <ToggleFavStatusButton artId={artId}/>
        </div>
    )
}