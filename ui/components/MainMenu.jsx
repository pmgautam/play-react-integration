var React = require("react");
var {NavLink} = require("react-router-dom");

const selected = {
    // backgroundColor: white,
    // fontWeight: bold
};


var MainMenu = () => {
    return (<nav className="mainMenu">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/students" activeStyle={selected}> Students </NavLink>
            <NavLink to="/subjects" activeStyle={selected}> Subjects </NavLink>

        </nav>
    )
}


module.exports = MainMenu