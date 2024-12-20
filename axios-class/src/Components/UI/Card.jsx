

export const Card = ({movieData}) => {
const {title,author_name,first_publish_year,cover_i} =  movieData
    return (
        <div className="card">
<div className="card">
      <img className="card-img" 
        src={cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : 'placeholder.jpg'} 
        alt={title || 'No cover available'} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h1 className="card-publish">{first_publish_year}</h1>
        <p className="card-author">{author_name?.[0] || "Unknown Author"}</p>
      </div>
        </div>
        </div>  
          )
}