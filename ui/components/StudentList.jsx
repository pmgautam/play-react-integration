const React = require("react")

const StudentList = ({student}) =>{
    return(
        <div>
            <h2>{student.name}</h2>
            <h3>grd: {student.grade}</h3>
        </div>
    )
}

module.exports = StudentList


