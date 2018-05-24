var React = require("react");
var SubjectList = require("SubjectList")

var SubjectDetails = ({subject}) => {

    console.log("subject", subject)

    const subjectDetails = subject.map(
        (x, i) => {
            return (<SubjectList subject={x} key={i}/>)
        }
    )

    return (
        <ul>
            {subjectDetails}
        </ul>
    )
}


module.exports = SubjectDetails

