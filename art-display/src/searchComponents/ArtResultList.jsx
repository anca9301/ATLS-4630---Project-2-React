import ArtResultItem from "./ArtResultItem"

export default function ArtResultList({searchResults}) {
    const items = []

    searchResults.forEach(result => {
        items.push(<ArtResultItem artData={result}/>)
    })

    return (
        <div className="result-list">
            {items}
        </div>
    )
}