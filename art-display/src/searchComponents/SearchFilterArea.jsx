import FilterDateArea from './FilterDateArea'
import SearchArea from './SearchArea'
import OriginDropdown from './OriginDropdown'


export default function SearchFilterArea(artList) {
    return (
        <>
        <SearchArea/>
        <FilterDateArea/>
        <OriginDropdown/>
        </>
    )
}