const React = require("react");
const SubjectList = require("SubjectList")

const SubjectDetails = ({subject}) => {

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

