import FilterDateArea from './FilterDateArea'
import SearchArea from './SearchArea'
import OriginDropdown from './OriginDropdown'


export default function SearchFilterArea({availableOrigins}) {
    return (
        <div className='search-filter-area'>
        <SearchArea/>
        <FilterDateArea/>
        <OriginDropdown availableOrigins={availableOrigins}/>
        </div>
    )
}