const React = require('react')
const Def = require('./layouts/Default')

function specificPlace ({place, index}) {
    let rating = (
        <h3 className="inactive">
          0 stars
        </h3>
      )
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      if (place.comments.length) {
        comments = place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })

        let sumRatings =  place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        rating = (
            <div>{sumRatings/place.comments.length}</div>
        )
      }
    return (
        <Def>
            <div className="card" style={{width: "18rem"}} >
                <img src={place.pic} className="card-img-top" alt={place.pic}/>
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.city}, {place.state}</p>
                    <p className="card-text">{rating}</p>
                    <p className="card-text">{comments}</p>
                    <a href={`/comments/${index}`}><button type="submit">Leave A Comment</button></a>
                    <form action={`/places/${index}?_method=DELETE`} method="post">
                        <button type="submit">Delete Restaurant</button>
                    </form>

                    <a href={`/places/edit/${index}`}><button type="submit">Edit</button></a>
                    
                </div>
            </div>
        </Def>
    )
    

}

module.exports = specificPlace