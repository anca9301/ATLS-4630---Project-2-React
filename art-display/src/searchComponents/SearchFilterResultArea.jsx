import { useState } from 'react'

import { InputEndDateContext } from '../Context/InputEndDateContext'
import { InputOriginContext } from '../Context/InputOriginContext'
import { InputStartDateContext } from '../Context/InputStartDateContext'
import ArtResultList from './ArtResultList'
import SearchFilterArea from './SearchFilterArea'


export default function SearchFilterResultArea({artList}) {
    const ArtList = artList

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
        <div>
            <InputStartDateContext.Provider value={{ filterStartDate, setFilterStartDate}}>
            <InputEndDateContext.Provider value={{ filterEndDate, setFilterEndDate}}>
            <InputOriginContext.Provider value={{ filterOrigin, setFilterOrigin}}>
                <SearchFilterArea/>
            </InputOriginContext.Provider>
            </InputEndDateContext.Provider>
            </InputStartDateContext.Provider>
            
            {/* pass filter results to art result list */}
            <ArtResultList/>
        </div>
    )
}