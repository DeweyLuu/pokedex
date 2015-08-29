var React = require('react');

var Header = React.createClass({
	render: function() {
		var style = {
			width: '100%'
		}
		return(
			<h1 style={style}>Pokedex</h1>
		)
	}
});

module.exports = Header;
