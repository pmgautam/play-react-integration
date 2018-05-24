var React = require("react")

const SubjectList = ({subject}) => {
    return (
        <div>
            <h2>{subject.name}</h2>
            <h3>Book: {subject.book}</h3>
            <h3>Credits: {subject.credits}</h3>
        </div>
    )
}

module.exports = SubjectList


