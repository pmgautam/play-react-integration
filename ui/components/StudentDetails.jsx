var React = require("react");
var StudentList = require("StudentList")

var StudentDetails = ({students}) => {

    console.log("students", students)

    const studentDetails = students.map(
        (x, i) => {
            return (<StudentList student={x} key={i}/>)
        }
    )

    return (
        <ul>
            {studentDetails}
        </ul>
    )
}


module.exports = StudentDetails

