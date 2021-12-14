const React = require('react')
const Def = require('./layouts/Default')

function Error404 () {
    return (
        <Def>
        <h1>Error 404</h1>
        <img src="/images/404.jpg" alt="" />
    </Def>
    )

}

module.exports = Error404