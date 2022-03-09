import {useState, useContext} from "react"
import SchowsContext from "./../context/shows/showsContext"
import AlertContext from "./../context/alerts/alertsContext"
import Alert from "./Alert"

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const showsContext = useContext(SchowsContext)
  const {searchShows} = showsContext
  const {alert, setAlert} = useContext(AlertContext)

  const onSearchHandler = (e) => {
      e.preventDefault()
      if(searchTerm === ""){
        setAlert("Please enter something", "danger")
      }else{
        searchShows(searchTerm)
      }
  }
  
  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null }
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