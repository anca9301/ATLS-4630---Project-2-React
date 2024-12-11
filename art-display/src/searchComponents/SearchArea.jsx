import SearchBar from './SearchBar'
import SearchAuthorCheckBox from './SearchAuthorCheckbox'
import SearchDescCheckBox from './SearchDescCheckbox'
import SearchTitleCheckBox from './SearchTitleCheckbox'
import Checkboxes from './Checkboxes'

export default function SearchArea() {
    return (
        <>
        <div className='searchArea'>
            <div className='searchBar'>
            </div>
            <div className='searchCheckBoxes'>
                <Checkboxes/>
            </div>
        </div>
        </>
    )
}