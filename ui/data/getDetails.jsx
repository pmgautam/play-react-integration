var axios = require('axios');

const SUBJECT_URL = 'http://localhost:9000/subjects';

module.exports = {
    getStudentDetails: function () {
        return axios.get(STUDENT_URL).then(function (res) {
            // res.map((d, i) => {
                document.createElement("area")
                document.getElementById("area").innerHTML = data
            // })
            console.log("res.data", res.data)
            return res.data
        }, function (res) {
            throw new Error(res);
        });
    }
};

// module.exports = {
//     getSubjectDetails: function () {
//         return axios.get(SUBJECT_URL).then(function (res) {
//             return res.data
//         }, function (res) {
//             throw new Error(res);
//         });
//     }
// };
//
//



