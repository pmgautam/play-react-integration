console.log("This is a test")

var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter, Route} = require("react-router-dom")
var Students = require('Students');
var Subjects = require('Subjects');
var Main = require('Main');

ReactDOM.render(
    <HashRouter>
        <div className="main">
            <Route exact path="/" component={Main}/>
            <Route path="/students" component={Students}/>
            <Route path="/subjects" component={Subjects}/>
            <Route Component="/" component={Main}/>
        </div>
    </HashRouter>,
    document.getElementById('test-area')
);

