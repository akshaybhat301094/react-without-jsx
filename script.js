'use strict'

var R = React.createElement;

function App(props) {
    return R("div", {className: 'main-container'}, 
    R('h1', {className: 'heading'}, 'This is just a sample app using React without JSX'));
}

var root = document.getElementById("app");
ReactDOM.render(R(App), root);