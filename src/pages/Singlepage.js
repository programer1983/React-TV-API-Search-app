import {useEffect, useContext } from "react"
import ShowsContext from "./../context/shows/showsContext"
import Loader from "./../components/Loader"

const Singlepage = ({match}) => {
  const {getSingleShow, singleShow, loading} = useContext(ShowsContext)
  
  useEffect(() => {
    getSingleShow(match.params.id)
  }, [])

  const removeTags = (text) => {
    if(text === null || text === ""){
      return false
    }else{
      text = text.toString()
    }
    return text.replace(/(<([^>]+)>)/gi, "")
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img 
            src={
             singleShow.image 
             ? singleShow.image.medium 
             : "https://www.publicdomainpictures.net/pictures/30000/velka/film-background-1334067869u9d.jpg" 
            } 
             alt={singleShow.name} 
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
               {singleShow.genres && singleShow.gernes.map((genre) => (
                 <span key={genre} className="singleshow__genre">{genre}</span>
               ))}
               <p>
                 <strong>Status:</strong> {singleShow.status && singleShow.status}
               </p>
               <p>
                 <strong>Rating:</strong> {singleShow.rating ? singleShow.rating.average : "No rating"}
               </p>
               <p>
                 <strong>Offical Site:</strong> {singleShow.officalSite ? (<a href={singleShow.officalSite} 
                 target="blank" rel="noreferren">{singleShow.officalSite}</a>) : "No offical site"}
               </p>
               <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Singlepage