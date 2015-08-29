var React = require('react');
var request = require('superagent');

var Pokemonlist = React.createClass({
	getInitialState: function() {
		return {
			pokemon: [],
			picture: []
		}
	},

	reset: function() {
		this.setState({
			pokemon: [],
			picture: []
		})
	},

	changePokemon: function() {
		var randomize2 = Math.floor(Math.random() * 700);
		var pokeurl = 'http://pokeapi.co/api/v1/sprite';
		request
			.get(pokeurl + '/' + randomize2)
			.end(function(err, res) {
				if(err) return console.log(err);
				var name = res.body.pokemon.name;
				var image = res.body.image;
				this.reset();
				this.setState({
					pokemon: this.state.pokemon.concat(name),
					picture: this.state.picture.concat('http://pokeapi.co' + image),
				})
			}.bind(this));
	},

	componentDidMount: function() {
		var randomize = Math.floor(Math.random() * 700);
		var pokeurl = 'http://pokeapi.co/api/v1/sprite';
		request
			.get(pokeurl + '/' + randomize)
			.end(function(err, res) {
				if(err) return console.log(err);
				var name = res.body.pokemon.name;
				var image = res.body.image;
				this.setState({
					pokemon: this.state.pokemon.concat(name),
					picture: this.state.picture.concat('http://pokeapi.co' + image)
				})
			}.bind(this));
	},

	render: function() {
		var style = {
			display: 'inline-block',
			border: '3px dashed blue',
			width: '40%',
			height: '200px'
		}
		return (
			<div style={style}>
				<h1>Name: {this.state.pokemon}</h1>
				<img src={this.state.picture} />
				<button onClick={this.changePokemon}>Change Pokemon</button>
			</div>
		)
	}
});

module.exports = Pokemonlist;
