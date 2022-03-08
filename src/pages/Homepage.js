import Searchbar from "../components/Searchbar"
import {useContext} from "react"
import ShowsContext from "./../context/shows/showsContext"

const Homepage = () => {
  const showsContext = useContext(ShowsContext)
  const {loading, shows} = showsContext


  return (
    <div className="homepage">
        <Searchbar />
      {loading ? (
          <h2>Loading...</h2>
        ) : (
         <div>
           {shows.map((item) => (
             <h3>{item.show.name}</h3>
           ))}
         </div>
      )}
    </div>
  )
}

export default Homepage