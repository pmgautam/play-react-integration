var React = require("react");

var StudentDetails = (props) => {
    fetch("http://localhost:9000").then(function (data) {
        console.log("data", {data})
        document.getElementById("data").innerHTML = data.headers
    }).catch(function (error) {
        console.log("error", error)
    })

    return (<h4>Students</h4>)
}


module.exports = StudentDetails

