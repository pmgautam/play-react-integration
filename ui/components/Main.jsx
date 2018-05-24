var React = require('react');
var {Link} = require('react-router-dom')
var Layout = require("PageLayout")

var Main = () => {
    return(
        <nav>
            <Layout>
                welcome to Main page. Select any options
            {/*<Link to = "Students">Students</Link>
            <Link to = "Subjects">Subjects</Link>*/}
            </Layout>
        </nav>
    )
}

module.exports = Main;