import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import { IsCheckContext } from '../Context/IsCheckContext'
import { SearchTextContext } from '../Context/SearchTextContext'

export default function Checkboxes() {
    const {isCheck, setIsCheck} = useContext(IsCheckContext)
    const {searchText, setSearchText} = useContext(SearchTextContext)

    const handleChange = (position) =>{
       const updatedCheckState = isCheck.map((item, index) => 
        index === position ? !item : item) // if position equal the index then change item
       setIsCheck(updatedCheckState) //oh boy new isCheck array
    }

    const handleTextChange = (e) => {
        let lowerCase = e.target.value.toLowerCase() //make that lowercase
        setSearchText(lowerCase)
        //return(console.log(isCheck))
    }

    return(
        <>
        <div>
            <input type="text" 
            value = {searchText}
            onChange={handleTextChange} />
        </div>
        <div>
            <label>
                <input 
                type="checkbox"
                checked={isCheck[0]}
                onChange={() => handleChange(0)}
                />
               Title
            </label>
            <label>
            <input 
                type="checkbox"
                checked={isCheck[1]}
                onChange={() => handleChange(1)}
                />
                Artist
            </label>
            <label>
            <input 
                type="checkbox"
                checked={isCheck[2]}
                onChange={() => handleChange(2)}
                />
                Description
            </label>
        </div>
        <SearchBar text={searchText} array={isCheck}/>
        </>
    )
}