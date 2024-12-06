import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SideBar from './SideBarComponents/SideBar'
import SearchFilterResultArea from './searchComponents/SearchFilterResultArea'
import ArtDisplay from './DisplayComponents/ArtDisplay'
import { ArtDisplayIndexContext } from './Context/ArtDisplayIndexContext'
import { FavoriteIndexesContext } from './Context/FavoriteIndexesContext'
import { FilterFavoritesContext } from './Context/FilterFavoritesContext'

const artList= [
  { id: 0, //id in the API is 34
    image_id: "2238572f-ad2a-110e-0eda-78dc50b8e13d",
    dateStart: 1533,
    dateEnd: 1533,
    placeOfOrigin: "Italy",
    title: "Joseph Sold by his Brothers",
    artist: "Raffaello Sanzio",
    desc: "A work made of engraving, printed in black, on paper."
  },
  { id: 1, //API id is 2893
    image_id: "513f71f2-18d3-7d99-25a3-d9d1110bf729",
    dateStart: 1908,
    dateEnd: 1908,
    placeOfOrigin: "England",
    title: "Commerce Counselor Ebenstein",
    artist: "Oskar Kokoschka",
    desc: "The sitter for this portrait, Ernest Ebenstein, was a distinguished tailor to the Austrian aristocracy. Ebenstein took an interest in the young Oskar Kokoschka and offered not only to make the artists clothes but also to instruct him in anatomy. In exchange for a fine suit, the tailor commissioned this portrait, which was one of the first mature works Kokoschka ever completed. Shortly after the Art Institute acquired the work in the mid-1950s, the artist visited the museum and recalled Ebenstein as a charming and kind man who taught him more about anatomy than anyone else."
  },
]

//call ArtDisplay, SearchFilterResultArea, SideBar

export default function App() {
  const [artDisplayIndex, setArtDisplayIndex] = useState(0)
  const [favoriteIndexes, setFavoriteIndexes] = useState([])
  const [filterFavorites, setFilterFavorites] = useState(false)

  const filteredList = artList.filter(item =>
    filterFavorites === true ? favoriteIndexes.includes(item.id) : true
  )

  return (
    <>
      <FilterFavoritesContext.Provider value = {{filterFavorites, setFilterFavorites}}>
          <SideBar/>
          <ArtDisplayIndexContext.Provider value = {{artDisplayIndex, setArtDisplayIndex}}>
            <SearchFilterResultArea artList={filteredList}/>
          </ArtDisplayIndexContext.Provider>
      </FilterFavoritesContext.Provider>

      <FavoriteIndexesContext.Provider value = {{favoriteIndexes, setFavoriteIndexes}}>
        <ArtDisplay artData={artList.at(artDisplayIndex)}/>
      </FavoriteIndexesContext.Provider>
    </>
  )
}
