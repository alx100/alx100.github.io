var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//        var {temp, location} = this.props;
//        return (
//            <h3>It is {temp}&#176;C in {location}</h3>
//        );
//     }
// });

// OR

// var WeatherMessage = (props) => {
//      return (
//            <h3>It is {props.temp}&#176;C in {props.location}.</h3>
//        );
// };

// OR

// var WeatherMessage = (props) => {
//     var {temp, location} = props;
//     return (
//            <h3>It is {temp}&#176;C in {location}</h3>
//        );
// };

// OR

var WeatherMessage = ({temp, location}) => {
    return (
           <h3 className='text-center'>It is {temp}&#176;C in {location}</h3>
       );
};


module.exports = WeatherMessage;