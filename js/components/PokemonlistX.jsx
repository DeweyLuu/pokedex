var React = require('react');
var request = require('superagent');

var Pokemonlist = React.createClass({
	getInitialState: function() {
		return {
			pokemon: [],
			picture: [],
			stats: [],
			original: []
		}
	},

	reset: function() {
		this.setState({
			pokemon: [],
			picture: [],
			stats: []
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
					stats: this.state.stats.concat('http://pokeapi.co/api/v1/description' + randomize2)
				})
			}.bind(this));
	},
	statistics: function() {
		var randomize = Math.floor(Math.random() * 700);
		var pokeurl2 = 'http://pokeapi.co/api/v1/description';
		request
			.get(this.state.original)
			.end(function(err, res) {
				if(err) return console.log(err);
				var stats = res.body.description;
				console.log(stats);
				this.setState({
					//stats: this.state.stats.concat(stats)
				})
			}.bind(this));
	},
	componentDidMount: function() {
		var randomize = Math.floor(Math.random() * 700);
		var pokeurl = 'http://pokeapi.co/api/v1/sprite';
		//var pokeurl = 'http://pokeapi.co/api/v1/pokemon';
		request
			.get(pokeurl + '/' + randomize)
			.end(function(err, res) {
				if(err) return console.log(err);
				console.log(res.body.pokemon.resource_uri);
				var popo = res.body.pokemon.resource_uri;
				var name = res.body.pokemon.name;
				var image = res.body.image;
				//console.log(res.body.descriptions[0].resource_uri);
				this.statistics();
				this.setState({
					pokemon: this.state.pokemon.concat(name),
					picture: this.state.picture.concat('http://pokeapi.co' + image),
					original: this.state.original.concat('http://pokeapi.co' + popo)
				})
			}.bind(this));
	},

	render: function() {
		var style = {
			display: 'inline-block',
			border: '3px solid green',
			width: '40%'
		}
		return (
			<div style={style}>
				<h1>Name: {this.state.pokemon}</h1>
				<img src={this.state.picture} />
				<p>{this.state.stats}</p>
				<button onClick={this.changePokemon}>Change Pokemon</button>
			</div>
		)
	}
});

module.exports = Pokemonlist;
