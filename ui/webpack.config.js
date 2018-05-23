const path = require("path")

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    resolve: {
        alias: {
            Students: path.resolve(__dirname, "components/Students.jsx"),
            Subjects: path.resolve(__dirname, "components/Subjects.jsx"),
            Main: path.resolve(__dirname, "components/Main.jsx"),
            StudentDetails: path.resolve(__dirname, "components/StudentDetails.jsx"),
            studentApi: path.resolve(__dirname, "data/studentDetails.jsx")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: [

                            "react",
                            "env"

                    ]
                }
            }
        ]
    }

};


