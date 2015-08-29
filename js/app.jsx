var React = require('react');
var Header = require('./components/Header.jsx');
var Pokemonlist = require('./components/Pokemonlist.jsx');
var Pokemonbot = require('./components/Pokemonbot.jsx');

var App = React.createClass({
	render: function() {
		var style = {
			width: '80%'
		}
		return (
			<div style={style}>
				<Header />
				<Pokemonlist />
				<Pokemonbot />
			</div>
		)
	}
});

React.render(<App />, document.body);
