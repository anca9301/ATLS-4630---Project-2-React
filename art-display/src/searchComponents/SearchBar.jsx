import { useState } from 'react'
import data from '../data.json' //make this file

export default function SearchBar(props) {
    //https://dev.to/salehmubashar/search-bar-in-react-js-545l
    //https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state
    const searchText = props.text
    const checkedArray = props.array
    const [filteredArray, setFilteredArray] = useState([])
    


    const parseArray = (a, t) =>{
        //let t=""
        //let ar=""
        //let d=""
        a.map((item, index) => {
            if (item){
                if(index== 0){
                    //t = "title"
                    data.map((object, i) => {
                        
                        if (data[i].title.toLowerCase().includes(t)){
                            //add to array
                            //console.log(object.title)
                            return(object)
                            
                        }
                        
                    })
                } else if(index==1){
                    //ar = "artist"
                    data.map((object, i) => {
                        if (data[i].artist.toLowerCase().includes(t)){
                            //add to array
                            //console.log(data[i].artist)
                        }
                    })
                }else if(index==2){
                    //d="desc"
                    data.map((object, i) => {
                        if (data[i].desc.toLowerCase().includes(t)){
                            //add to array
                            //console.log(data[i].desc)
                        }
                    })
                }
            }
        })
        // console.log(data[1].title)
    }

    parseArray(checkedArray, searchText)

    return ( 
        <>
        
        </>
    )
}