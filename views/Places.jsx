const React = require('react')
const Def = require('./layouts/Default')

function Places ({placesObjects}) {
    let PlacesFormatted = placesObjects.map((place, index) => {
        return (
            <div className="card" style={{width: "18rem"}} >
                <img src={place.pic} className="card-img-top" alt={place.pic}/>
                <div className="card-body">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="card-text">{place.city}, {place.state}</p>
                    <a href={`/places/${place.id}`} className="btn btn-primary">Order Something</a>
                </div>
            </div>
            
            
        )
    })

    return (
        <Def>
            <div className="grid-container">
                {PlacesFormatted}
            </div>
            

            
        </Def>
    )
    

}

module.exports = Places