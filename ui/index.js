console.log("This is a test")

const React = require('react');
const ReactDOM = require('react-dom');
const {HashRouter, Route} = require("react-router-dom")
const Students = require('Students');
const Subjects = require('Subjects');
const Main = require('Main');

/**
 * Starting page that shows routes to pages of students and subjects
 */

ReactDOM.render(
    <HashRouter>
        <div className="main">
            <Route exact path="/" component={Main}/>
            <Route path="/students" component={Students}/>
            <Route path="/subjects" component={Subjects}/>
        </div>
    </HashRouter>,
    document.getElementById('test-area')
);

