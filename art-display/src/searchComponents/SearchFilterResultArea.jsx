import { useState } from 'react'

import { InputEndDateContext } from '../Context/InputEndDateContext'
import { InputOriginContext } from '../Context/InputOriginContext'
import { InputStartDateContext } from '../Context/InputStartDateContext'
import ArtResultList from './ArtResultList'
import SearchFilterArea from './SearchFilterArea'
import { IsCheckContext } from '../Context/IsCheckContext'
import { SearchTextContext } from '../Context/SearchTextContext'

import './search.css'


export default function SearchFilterResultArea({artList, availableOrigins}) {
    const ArtList = artList

    //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
    const [isCheck, setIsCheck] = useState(new Array(3).fill(false)) //length of array is three because 3 boxes
    const [searchText, setSearchText] = useState("") //for search text bar

    const searchList = 0

    const curYear = new Date().getFullYear()

    const [filterStartDate, setFilterStartDate] = useState(0)
    const [filterEndDate, setFilterEndDate] = useState(curYear)
    const [filterOrigin, setFilterOrigin] = useState("")

    const filteredDate = artList.filter((item) => {
        return (item.dateStart >= filterStartDate && 
        item.dateEnd <= filterEndDate)
    })

    const filteredOrigin = filteredDate.filter((item)=> {
        let filter = filterOrigin.toLowerCase()
        let origin = item.placeOfOrigin.toLowerCase()
        return (origin.includes(filter))
    })

    return (
        <div
        className='search-filter-result-area'>
            <SearchTextContext.Provider value = {{ searchText, setSearchText }}>
            <IsCheckContext.Provider value = {{ isCheck, setIsCheck }}>
            <InputStartDateContext.Provider value={{ filterStartDate, setFilterStartDate}}>
            <InputEndDateContext.Provider value={{ filterEndDate, setFilterEndDate}}>
            <InputOriginContext.Provider value={{ filterOrigin, setFilterOrigin}}>
                <SearchFilterArea availableOrigins={availableOrigins}/>
            </InputOriginContext.Provider>
            </InputEndDateContext.Provider>
            </InputStartDateContext.Provider>
            </IsCheckContext.Provider>
            </SearchTextContext.Provider>
            
            {/* pass filter results to art result list */}
            <ArtResultList searchResults={filteredOrigin}/>
        </div>
    )
}