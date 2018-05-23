var axios = require('axios');

const URL = 'http://localhost:9000';

module.exports = {
    getDetails: function () {
        return axios.get(URL).then(function (res) {
            return res
        }, function (res) {
            throw new Error(res);
        });
    }
};


