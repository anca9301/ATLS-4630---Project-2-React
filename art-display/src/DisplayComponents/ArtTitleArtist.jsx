export default function ArtTitleArtist({title, artist}) {
    return (
        <div className="display-title-artist">
        <p className="display-title">{title}</p>
        <p className="display-artist">{artist}</p>
        </div>
    )
}