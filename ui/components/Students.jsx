const React = require("react");
const StudentDetails = require("StudentDetails");
const Layout = require("PageLayout")
const STUDENT_URL = 'http://localhost:9000/students';
const axios = require("axios")

class Students extends React.Component {

    constructor(props) {
        super(props)
        this.state = {students: []}

        this.getStudentDetails().then(data => {
            this.setState({students: data})
        })
    }

    getStudentDetails() {
        return axios.get(STUDENT_URL).then(function (res) {
            return res.data
        }, function (res) {
            throw new Error(res);
        });
    }

    render() {
        return (
            <Layout>
                <div>
                    {console.log(this.state.students)}
                    <h1> Students </h1>
                    <StudentDetails students={this.state.students}/>
                </div>
            </Layout>
        )
    }
}


module.exports = Students;




