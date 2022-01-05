const React = require('react')
const Def = require('./layouts/FormDefault')

function Edit({place, index}) {
    return (
        <Def>
			<div className="new-form container">
			<h1 className="new-place-title">Edit Info</h1>
            <form action={`/places/${index}?_method=PUT`} method="post">
				<div className="row">
				<div className="mb-3 form-group col-sm-6">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" name="name" id='name' className='form-control' defaultValue={place.name}/>
                </div>
				<div className="mb-3 form-group col-sm-6">
                    <label htmlFor="pic" className='form-label'>Image URL</label>
                    <input type="text" name="pic" id='pic' className='form-control' defaultValue={place.pic}/>
                </div>
				</div>
				<div className="row">
				<div className="mt-4 mb-3 form-group col-sm-6">
                    <label htmlFor="state" className='form-label'>State</label>
                    <select name='state' id="state" defaultValue={place.state}>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
                    </select>				
                </div>
				<div className="mb-3 form-group col-sm-6">
                    <label htmlFor="city" className='form-label'>City</label>
                    <input type="text" name="city" id='city' className='form-control' defaultValue={place.city}/>
                </div>
				</div>
                <div className="mb-3">
                    <label htmlFor="cuisines" className='form-label'>Cuisine</label>
                    <input type="text" name="cuisines" id='cuisines' className='form-control'defaultValue={place.cuisines}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
			</div>
        </Def>
    )
}

module.exports = Edit;