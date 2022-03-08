import { useReducer } from "react"
import SchowsContext from "./showsContext"
import SchowsReducer from "./showsReducer"
import axios from "axios"
import {
    SEARCH_SHOWS, 
    SET_LOADING, 
    SET_SINGLE_SHOW, 
    CLEAR_SINGLE_SHOW
} from "./../types"

const initialState = {
  shows: [],
  singleShow: {},
  loading: false
}

const ShowsState = (props) => {
  const [state, dispatch] = useReducer(SchowsReducer, initialState)
  
  const searchShows = async (searchTerm) => {
    dispatch({type: SET_LOADING})
    const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(data)
    dispatch({
      type: SEARCH_SHOWS, 
      payload: data,
    })
  }
  
  return (
    <SchowsContext.Provider
       value = {{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
       }}
    >
        {props.children}
    </SchowsContext.Provider>
  )
}

export default ShowsState