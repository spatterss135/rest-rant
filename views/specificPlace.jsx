const React = require('react')
const Def = require('./layouts/Default')

function specificPlace ({place, index}) {
    return (
        <Def>
            <div className="card" style={{width: "18rem"}} >
                <img src={place.pic} className="card-img-top" alt={place.pic}/>
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.city}, {place.state}</p>
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