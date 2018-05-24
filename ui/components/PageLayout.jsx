var React = require("react")
var Navigation = require("MainMenu")

const PageLayout = (props) => {
    return (
        <div className="overallPage">
            <Navigation/>
            {props.children}
        </div>
    )
}

module.exports = PageLayout