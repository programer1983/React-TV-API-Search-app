import Searchbar from "../components/Searchbar"
import {useContext} from "react"
import ShowsContext from "./../context/shows/showsContext"
import ListItem from "../components/ListItem"

const Homepage = () => {
  const showsContext = useContext(ShowsContext)
  const {loading, shows} = showsContext


  return (
    <div className="homepage">
        <Searchbar />
      {loading ? (
          <h2>Loading...</h2>
        ) : (
         <div className="homepage__list">
           {shows.map((item) => (
             <ListItem
                key={item.show.id}
                id={item.show.id}
                image={
                  item.show.image 
                  ? item.show.image.medium 
                  : "https://www.publicdomainpictures.net/pictures/30000/velka/film-background-1334067869u9d.jpg"
                } 
                name={item.show.name} 
                rating={item.show.rating.average ? item.show.rating.average : "No rating"} 
              />
           ))}
         </div>
      )}
    </div>
  )
}

export default Homepage