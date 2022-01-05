import React, { Component } from 'react';
const Def = require('./layouts/FormDefault')
function Comment({place}) {
    return (
        <Def>
			<div className="new-form container">
			<h1 className="new-place-title">Add a New Comment for {place.name}</h1>
            <form action={`/comments/${place.id}`} method="post">
				<div className="row">
				<div className="mb-3 form-group col-sm-6">
                    <label htmlFor="author" className='form-label'>Name</label>
                    <input type="text" name="author" id='author' className='form-control'/>
                </div>
				<div className="">
                    <label htmlFor="rant">Rant</label>
                    <input type="checkbox" name="rant" id='pic'/>
                </div>
				</div>
				<div className="row">
				<div className="mt-4 mb-3 form-group col-sm-6">
                    <p>Stars</p>
                    <input type="radio" id="html" name="stars" value="1"/>
                    <label for="html">1</label>
                    <input type="radio" id="html" name="stars" value="2"/>
                    <label for="html">2</label>
                    <input type="radio" id="html" name="stars" value="3"/>
                    <label for="html">3</label>
                    <input type="radio" id="html" name="stars" value="4"/>
                    <label for="html">4</label>
                    <input type="radio" id="html" name="stars" value="5"/>
                    <label for="html">5</label>
                    			
                </div>
				<div className="mb-3 form-group col-sm-6">
                    <label htmlFor="content" className='form-label'>Review</label>
                    <input type="text" name="content" id='content' className='form-control'/>
                </div>
				</div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
			</div>
           
        </Def>
    )
}

module.exports = Comment;