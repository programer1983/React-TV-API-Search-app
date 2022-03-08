import {useState, useContext} from "react"
import SchowsContext from "./../context/shows/showsContext"
import Alert from "./Alert"

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const {searchShows} = useContext(SchowsContext)

  const onSearchHandler = (e) => {
      e.preventDefault()
      searchShows(searchTerm)
  }
  
  return (
    <div className="searchbar">
      <Alert message="Please enter something" type="danger" />
        <form className="searchbar__form">
            <input 
               type="text" 
               placeholder="Search for TV Show"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
               className="btn btn-block"
               onClick={onSearchHandler}
            >
                SEARCH 
            </button>
        </form>
    </div>
  )
}

export default Searchbar