const React = require("react");
const {NavLink} = require("react-router-dom");

const selected = {
    color: "blue",
    fontWeight: "bold"
};


const MainMenu = () => {
    return (<nav className="mainMenu">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/students" activeStyle={selected}> Students </NavLink>
            <NavLink to="/subjects" activeStyle={selected}> Subjects </NavLink>

        </nav>
    )
}


module.exports = MainMenu