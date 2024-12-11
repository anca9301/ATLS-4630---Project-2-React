export default function ArtTitleArtist({title, artist}) {
    return (
        <div className="display-title-artist">
        <h1>{title}</h1>
        <h3>{artist}</h3>
        </div>
    )
}