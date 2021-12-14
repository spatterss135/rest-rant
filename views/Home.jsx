const React = require('react')
const Def = require('./layouts/Default')

function Home () {
    return (
        <Def>
            <h1>Home page Baby!</h1>
            <a href="/places">
                <img src="/images/slurp.jpg" alt="" />
             <button className="btn-primary">Places Page</button>
            </a>
        </Def>
    )
}

module.exports = Home