var React = require('react');

// var About = React.createClass({
//     render: function() {
//        return (
//            <h3>About Component</h3>
//        );
//     }
// });

// refactoring stateless component with arrow func

// var About = function (props) {
//     return (
//         <h3>About Component</h3>
//     )
// };

// or


var About = (props) => {
    return (
        <div>
            <h1 className='text-center page-title'>About</h1>
            <p>
               Async weather application build on React.
            </p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - this was the JS library used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - API that I used to search for weather data by city name. 
                </li>
            </ul>
        </div>
    );
};

// var About = (props) => (<h3>About Component</h3>);




module.exports = About;