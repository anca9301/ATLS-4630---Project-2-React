export default function ArtDescription({desc}) {
    return (
        <div className="display-description-container">
            <p className="display-description-title">Description:</p>
            <p className="display-description">{desc}</p>
        </div>
    )
}