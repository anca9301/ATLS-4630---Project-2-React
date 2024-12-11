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

    const filteredTitle = filteredOrigin.filter((item)=> {
        let text = searchText.toLowerCase()
        let title = item.title.toLowerCase()
        if (isCheck[0]) {
            return(title.includes(text))
        } else {
            return (title.includes(title))
        }
    })

    const filteredArtist = filteredTitle.filter((item)=> {
        let text = searchText.toLowerCase()
        let artist = item.title.toLowerCase()
        if (isCheck[1]) {
            return(artist.includes(text))
        } else {
            return (artist.includes(artist))
        }
    })

    const filteredDesc = filteredArtist.filter((item)=> {
        let text = searchText.toLowerCase()
        let desc = item.desc.toLowerCase()
        if (isCheck[2]) {
            return(desc.includes(text))
        } else {
            return (desc.includes(desc))
        }
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
            <ArtResultList searchResults={filteredDesc}/>
        </div>
    )
}