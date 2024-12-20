import { useState } from 'react'
import './css/App.css'

import SideBar from './SideBarComponents/SideBar'
import SearchFilterResultArea from './searchComponents/SearchFilterResultArea'
import ArtDisplay from './DisplayComponents/ArtDisplay'
import { ArtDisplayIndexContext } from './Context/ArtDisplayIndexContext'
import { FavoriteIndexesContext } from './Context/FavoriteIndexesContext'
import { FilterFavoritesContext } from './Context/FilterFavoritesContext'

import data from './data.json'

const artList = data
// const artList= [
//   { id: 0, //id in the API is 34
//     image_id: "2238572f-ad2a-110e-0eda-78dc50b8e13d",
//     dateStart: 1533,
//     dateEnd: 1533,
//     placeOfOrigin: "Italy",
//     title: "Joseph Sold by his Brothers",
//     artist: "Raffaello Sanzio",
//     desc: "A work made of engraving, printed in black, on paper."
//   },
//   { id: 1, //API id is 2893
//     image_id: "513f71f2-18d3-7d99-25a3-d9d1110bf729",
//     dateStart: 1908,
//     dateEnd: 1908,
//     placeOfOrigin: "England",
//     title: "Commerce Counselor Ebenstein",
//     artist: "Oskar Kokoschka",
//     desc: "The sitter for this portrait, Ernest Ebenstein, was a distinguished tailor to the Austrian aristocracy. Ebenstein took an interest in the young Oskar Kokoschka and offered not only to make the artists clothes but also to instruct him in anatomy. In exchange for a fine suit, the tailor commissioned this portrait, which was one of the first mature works Kokoschka ever completed. Shortly after the Art Institute acquired the work in the mid-1950s, the artist visited the museum and recalled Ebenstein as a charming and kind man who taught him more about anatomy than anyone else."
//   },
//   {
//     id: 2, 
//     image_id:"b2ac0e87-792d-186b-4a79-0b08f522cb02",
//     dateStart: 1920,
//     dateEnd: 1920,
//     placeOfOrigin:"United States",
//     title: "Flowers (Cyclamen)",
//     artist: "Charles Demuth",
//     desc: "Watercolor and graphite on off-white wove paper"
//   },
//   {
//     id: 3, //154401
//     image_id: "24200026-7055-8f34-6019-a7b03755c71c",
//     dateStart: 1922,
//     dateEnd: 1932,
//     placeOfOrigin: "Japan",
//     title: "Tosumo",
//     artist: "Tsukioka Gyokusei",
//     desc: 'from the series "Fifty Kyogen Plays (Kyogen gojuban)"'
//   },
//   {
//     id: 4, //36482
//     image_id: "e2629147-5d09-1a4b-dd72-acac9b9e0086",
//     dateStart: 1715,
//     dateEnd: 1725,
//     placeOfOrigin: "Vienna",
//     title: "Teapot",
//     artist: "Du Paquier Porcelain Manufactory",
//     desc: "Hard-paste porcelain"
//   },
//   {
//     id: 5, //23566
//     image_id: "2238313e-4e81-a5be-0605-6f2d05e4401f",
//     dateStart: 1501,
//     dateEnd: 1600,
//     placeOfOrigin: "Japan",
//     title: "Landscape of the Four Seasons",
//     artist: "Sesson Shukei",
//     desc: "Sesson Shukei was a Zen Buddhist monk and painter who achieved his idiosyncratic painterly style during an itinerant career in eastern Japan, seemingly without ever traveling to Kyoto, Japan’s cultural and political capital at the time. Sesson’s dream-like Chinese landscape expands before our eyes in understandable spatial depth, an effect that is enhanced by the folds of the screen. Reading the composition in the same manner as the Japanese language, from right to left, the seasons flow from the first red plum blossoms of the year, depicted on the right side of the right screen (top), all the way across to the snow-covered mountains on the far left side of the left screen (bottom). A mountain temple on the right and a village on the left enclose an inlet upon which boats come and go. People bustle about in activity, geologically impossible rock formations twist and turn, and water splashes out from the bottom of a waterfall like reaching fingers."
//   },
//   {
//     id: 6, //34028
//     image_id: "92777387-4f55-e3fa-10ba-a549810aca95",
//     dateStart: 1764,
//     dateEnd: 1764,
//     placeOfOrigin: "England",
//     title: " Mrs. Daniel Hubbard (Mary Greene)",
//     artist: "John Singleton Copley",
//     desc: "John Singleton Copley was largely self-taught, his only formal training from his stepfather Peter Pelham, an English artist who specialized in mezzotint engraving. He nonetheless garnered considerable success as a portrait painter before the Revolutionary War. The sitter here, Mary Greene Hubbard, was a member of Boston’s merchant class (Copley’s portrait of her husband, Daniel Hubbard [1947.27], is also in the Art Institute collection). Her pose, gown, and background were precisely copied from a British engraving of a noblewoman, yet Copley distinguished the work as his own by capturing the figure’s individual features as well as the surfaces and colors of the luxurious fabrics. A decade later, he left colonial Massachusetts for England to further his career and simultaneously escape the strong political divides among family, friends, and patrons amid the impending Revolution."
//   },
//   {
//     id: 7, //42505
//     image_id: "2d0c19a2-e757-1097-0325-18bdbeb087fa",
//     dateStart: 1578,
//     dateEnd: 1604,
//     placeOfOrigin: "Italy",
//     title: "Suffer the Little Children to Come unto Me",
//     artist: "Giovanni Battista Tinti",
//     desc: "Brush and brown washes and pen and brown ink, heightened with lead-white gouache (partially discolored), on cream laid paper"
//   },
//   {
//     id: 8, //114567
//     image_id: "a405338f-97eb-b04a-d096-5de8f5cf2204",
//     dateStart: 2016,
//     dateEnd: 2016,
//     placeOfOrigin: "India",
//     title: "Meghdoot: Uttar-megh (The Cloud Messenger)",
//     artist: "Yugal Kishor Sharma",
//     desc: "Gouache and gold leaf on handmade paper"
//   },
//   {
//     id: 9, //36321
//     image_id: "0e2fa0d4-c7d3-b181-630f-722e95dbf0ec",
//     dateStart: 1745,
//     dateEnd: 1755,
//     placeOfOrigin: "Italy",
//     title: "Head of Comity",
//     artist: "Raphael",
//     desc: "Red chalk on cream laid paper, laid down on cream wove paper"
//   },
//   {
//     id: 10, //42568
//     image_id: "0f85c8df-2ea4-ff17-18d4-5c14cb64e37e",
//     dateStart: 1992,
//     dateEnd: 1992,
//     placeOfOrigin: "United States",
//     title: "Suit",
//     artist: "Lorna Simpson",
//     desc: 'In Suit, Lorna Simpson examines gender representation and the implications of fashion by presenting a woman in masculine clothing. In speaking of this work, the artist has stated: “I like using the figure of the black woman to talk about many different things, including men. I don’t have to have a man in the picture to suggest that these figures are both male and female. I’m hoping to stretch the viewer’s perceptions beyond thoughts of race and gender.”'
//   },
//   {
//     id: 11, //42845
//     image_id: "e8fc1a78-2f80-b9dc-2a9d-05896eb5f621",
//     dateStart: 1987,
//     dateEnd: 1987,
//     placeOfOrigin: "United States",
//     title: "Breeze at Work",
//     artist: "Sandy Skoglund",
//     desc: "Silver dye-bleach print"
//   },
//   {
//     id: 12, //34969
//     image_id: "374a8fac-7071-785b-f8a4-5c440a6eff7d",
//     dateStart: 1801,
//     dateEnd: 1834,
//     placeOfOrigin: "Japan",
//     title: "Women and Med by the Bento Shop",
//     artist: "Totoya Hokkei",
//     desc: "Color woodblock print; surimono"
//   },
//   {
//     id: 13, //40903
//     image_id: "ab9ee648-c086-8889-68e7-5de2bdf40336",
//     dateStart: 1805,
//     dateEnd: 1851,
//     placeOfOrigin: "England",
//     title: "Fox Hunt",
//     artist: "Henry Alken",
//     desc: "Watercolor, over graphite, heightened with traces of white gouache, on cream wove paper, laid down on gray wove paper",
//   },
//   {
//     id: 14, //36198
//     image_id: "6626544f-2c5f-d1ad-11c7-87982a58d097",
//     dateStart: 1900,
//     dateEnd: 1900,
//     placeOfOrigin: "Spain",
//     title: "Young Women with a Hat",
//     artist: "Pablo Picasso",
//     desc: "The subject of this portrait is likely Germaine Gargallo (1880–1948). When she refused the marriage proposal of Picasso’s friend and roommate, Carles Casagemas (1880–1901), tragedy followed. In a drunken rage, Casagemas shot Gargallo in the head (grazing her temple), and then turned the gun on himself. His death and Picasso’s resulting grief led, in part, to the artist’s Blue Period, which explored themes of despair and isolation."
//   },
//   {
//     id: 15, //117694
//     image_id: "5755d02e-5bf8-6b9e-6148-76d3067e61e4",
//     dateStart: 1935,
//     dateEnd: 1935,
//     placeOfOrigin: "Spain",
//     title: "Minotaur and Wounded Horse",
//     artist: "Pablo Picasso",
//     desc: "Pen and brush and black inks, graphite, and colored crayons, with smudging, over incising, on cream laid paper"
//   },
//   {
//     id: 16, //85586
//     image_id: "9fa3f68a-d303-eb92-f44e-850477566432",
//     dateStart: 1000,
//     dateEnd: 1476,
//     placeOfOrigin: "Peru",
//     title: "Work Basket",
//     artist: "Chancay",
//     desc: "In central and southern coastal Peru, archaeologists have unearthed a variety of weaving tools and work baskets. These are often found in women’s burials, which suggests that spinning yarn and weaving textiles were the domain of women. This basket was probably made for a weaver to hold tools used in making textiles, such as needle cases, needles, spindles, and combs."
//   },
//   {
//     id: 17, //105466
//     image_id: "9bc9134c-6b57-80be-c118-566667a615ae",
//     dateStart: 1603,
//     dateEnd: 1613,
//     placeOfOrigin: "Netherlands",
//     title: "The Battle between the Gods and the Giants",
//     artist: " Joachim Antonisz. Wtewael",
//     desc: "The subject of the victory of the gods of Olympus over the ancient race of giants provided Joachim Wtewael with the opportunity to depict exaggerated athletic poses and striking contrasts of space and light. From the clouds, the Olympian gods wield their attributes as weapons: Jupiter hurls thunderbolts; Neptune brandishes his triton; and Mercury uses his caduceus as a spear. The helmeted figure on the right is Minerva, the goddess of wisdom and war. The painting's gemlike effect results from the use of a copper support and from its small scale. The artist's self-conscious display of his skills was a hallmark of the international style known as Mannerism, which was fashionable in Holland around 1600."
//   },
//   {
//     id: 18, //248314,
//     image_id: "b6160e9c-2585-257b-30f7-606440cb91e0",
//     dateStart: 2011,
//     dateEnd: 2011,
//     placeOfOrigin: "Spain",
//     title: "Veiled Shadow XXVIII",
//     artist: "Jaume Plensa",
//     desc: "Black paint, over clear acrylic gel medium, over ink jet print on recto and verso of white wove paper"
//   },
//   {
//     id: 19, //110872
//     image_id: "e8344810-288f-ea60-6264-d7c785ffc097",
//     dateStart: 1525,
//     dateEnd: 1565,
//     placeOfOrigin: "Italy",
//     title: "Portrait of a Lady",
//     artist: "Titian",
//     desc: "Oil on canvas"
//   },
//   {
//     id: 20, //222816,
//     image_id: "465cc832-eafb-340f-6504-de4ef9005644",
//     dateStart: 2006,
//     dateEnd: 2006,
//     placeOfOrigin: "India",
//     title: "Changing Skin",
//     artist: "Anju Dodiya",
//     desc: "Watercolor and charcoal with stumping and smudging, over graphite, on cream wove paper"
//   }
// ]

// const artList = data

export default function App() {
  const [artDisplayIndex, setArtDisplayIndex] = useState(0)
  const [favoriteIndexes, setFavoriteIndexes] = useState([])
  const [filterFavorites, setFilterFavorites] = useState(false)

  const filteredList = artList.filter(item =>
    filterFavorites === true ? favoriteIndexes.includes(item.id) : true
  )

  const availableOrigins = [""]
  artList.forEach(item => {
    if (!availableOrigins.includes(item.placeOfOrigin)) {
      availableOrigins.push(item.placeOfOrigin)
  }})

  return (
    <div className='application'>
      <FilterFavoritesContext.Provider value = {{filterFavorites, setFilterFavorites}}>
          <SideBar/>
          <ArtDisplayIndexContext.Provider value = {{artDisplayIndex, setArtDisplayIndex}}>
            <SearchFilterResultArea artList={filteredList} availableOrigins={availableOrigins}/>
          </ArtDisplayIndexContext.Provider>
      </FilterFavoritesContext.Provider>

      <FavoriteIndexesContext.Provider value = {{favoriteIndexes, setFavoriteIndexes}}>
        <ArtDisplay artData={artList.at(artDisplayIndex)}/>
      </FavoriteIndexesContext.Provider>
    </div>
  )
}
