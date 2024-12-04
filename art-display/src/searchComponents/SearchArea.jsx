import SearchBar from './SearchBar'
import SearchAuthorCheckBox from './SearchAuthorCheckbox'
import SearchDescCheckBox from './SearchDescCheckbox'
import SearchTitleCheckBox from './SearchTitleCheckbox'

export default function SearchArea() {
    return (
        <>
        <div className='searchArea'>
            <div className='searchBar'>
            <SearchBar/>
            </div>
            <div className='searchCheckBoxes'>
                <SearchTitleCheckBox/>
                <SearchAuthorCheckBox/>
                <SearchDescCheckBox/>
            </div>
        </div>
        </>
    )
}