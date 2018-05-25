const React = require('react');
const {Link} = require('react-router-dom')
const Layout = require("PageLayout")

/**
 * This is the front page. It doesn't contain any functionality. Only serves as a welcome page
 */
const Main = () => {
    return(
        <nav>
            <Layout>
                welcome to Main page. Select any options
            </Layout>
        </nav>
    )
}

module.exports = Main;

