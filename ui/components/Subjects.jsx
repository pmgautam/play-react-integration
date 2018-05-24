var React = require("react");
var SubjectDetails = require("SubjectDetails");
var Layout = require("PageLayout")
const SUBJECT_URL = 'http://localhost:9000/subjects';
var axios = require("axios")

class Subjects extends React.Component {

    constructor(props) {
        super(props)
        this.state = {subject: []}

        this.getStudentDetails().then(data => {
            this.setState({subject: data})
        })
    }

    getStudentDetails() {
        return axios.get(SUBJECT_URL).then(function (res) {
            return res.data
        }, function (res) {
            throw new Error(res);
        });
    }

    render() {
        return (
            <Layout>
                <div>
                    <h1>Subjects</h1>
                    {console.log(this.state.subject)}
                    <SubjectDetails subject={this.state.subject}/>
                </div>
            </Layout>
        )
    }
}


module.exports = Subjects;




