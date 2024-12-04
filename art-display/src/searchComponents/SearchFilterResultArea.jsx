import ArtResultList from './ArtResultList'
import SearchFilterArea from './SearchFilterArea'


export default function SearchFilterResultArea({artList}) {
    const ArtList = artList

    return (
        <div>
            <SearchFilterArea/>
            <ArtResultList/>
        </div>
    )
}