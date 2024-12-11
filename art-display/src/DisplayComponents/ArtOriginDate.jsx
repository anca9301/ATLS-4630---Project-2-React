export default function ArtOriginDate({origin, dateStart, dateEnd}) {
    return (
        <div className="display-origin-date">
            <p>Place Of Origin: {origin}</p>
            <p>{dateStart} - {dateEnd}</p>
        </div>
    )
}