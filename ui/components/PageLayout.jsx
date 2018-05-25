const React = require("react")
const Navigation = require("MainMenu")

const PageLayout = (props) => {
    return (
        <div className="overallPage">
            <Navigation/>
            {props.children}
        </div>
    )
}

module.exports = PageLayout

