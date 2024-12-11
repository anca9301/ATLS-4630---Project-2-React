import { useState } from 'react'
import SearchBar from './SearchBar'

export default function Checkboxes() {
    //https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
    const [isCheck, setIsCheck] = useState(new Array(3).fill(false)) //length of array is three because 3 boxes
    const [searchText, setSearchText] = useState("") //for search text bar
   

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
            <input type="text" onChange={handleTextChange} />
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