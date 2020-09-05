import React, { Component } from 'react'

import BigPokemon from './BigPokemon'

export default class SearchResult extends Component {

	constructor(props){
		super(props)
		this.state = {error: false}
	}

	render() {
		return (
			<div className="container">
				<BigPokemon url={`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.searchTerm}`} />
			</div>
		)
	}
}
