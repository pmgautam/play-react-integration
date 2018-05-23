var React = require("react");
var StudentDetails = require("StudentDetails");
var details = require("studentApi")


var Students = () => {
    details.getDetails().then(function (data) {
        console.log("here", data.data.map(
            x => [document.getElementById("data").innerText = x.name]
        ))
    })
    return (
        <div>
            <StudentDetails/>
            <h1>Students page</h1>
        </div>

    )
};


module.exports = Students;




