const React = require('react')
const Def = require('./layouts/Default')

function specificPlace ({place, index}) {
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
      }
    return (
        <Def>
            <div className="card" style={{width: "18rem"}} >
                <img src={place.pic} className="card-img-top" alt={place.pic}/>
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.city}, {place.state}</p>
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