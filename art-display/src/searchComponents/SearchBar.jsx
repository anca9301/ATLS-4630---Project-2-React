import useState from 'react'
import data from '../data.json' //make this file

export default function SearchBar(props) {
    //https://dev.to/salehmubashar/search-bar-in-react-js-545l
    const searchText = props.text
    const checkedArray = props.array
    


    const parseArray = (a, t) =>{
        //let t=""
        //let ar=""
        //let d=""
        a.map((item, index) => {
            if (item){
                if(index== 0){
                    //t = "title"

                } else if(index==1){
                    //ar = "artist"
                }else if(index==2){
                    //d="desc"
                }
            }
        })
        //console.log(data)
    }

    parseArray(checkedArray, searchText)

    return ( 
        <>
        
        </>
    )
}