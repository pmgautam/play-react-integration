var React = require('react');
var {Link} = require('react-router-dom')

var Main = () => {
    return(
        <nav>
            <Link to = "Students">Students</Link>
            <Link to = "Subjects">Subjects</Link>
        </nav>
    )
}

module.exports = Main;