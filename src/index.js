import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ScoreButton extends React.Component {
	valueWithSign() {
		if(this.props.value > 0) {
			return "+" + this.props.value
		} else {
			return this.props.value
		}
	}

	render() {
		return (
			<button onClick = {() => this.props.buttonClick(this.props.value)}> { this.valueWithSign() } </button>
		)
	}
}

class PlayerEntry extends React.Component {
	render() {
		return (
			<div className = "player-entry">
				<div className = "player-button-box">
					<h2 contenteditable="true">{this.props.playerName}</h2>
					<ul className = "score-list">
						<ScoreButton value = "1" buttonClick = {this.props.scoreButtonClick} />
						<ScoreButton value = "2" buttonClick = {this.props.scoreButtonClick} />
						<ScoreButton value = "3" buttonClick = {this.props.scoreButtonClick} />
						<ScoreButton value = "4" buttonClick = {this.props.scoreButtonClick} />
						<ScoreButton value = "5" buttonClick = {this.props.scoreButtonClick} />
						<ScoreButton value = "6" buttonClick = {this.props.scoreButtonClick} />
					</ul>
					<ul className = "score-list">
						<ScoreButton value = "-1" buttonClick = {this.props.scoreButtonClick}/>
						<ScoreButton value = "-2" buttonClick = {this.props.scoreButtonClick}/>
						<ScoreButton value = "-3" buttonClick = {this.props.scoreButtonClick}/>
					</ul>
				</div>
				<div className = "player-score-box">
					<h3 className = "player-score">{this.props.score}</h3>
				</div>
			</div>
		);
	}
}

class MutererGame extends React.Component {
	constructor(props) {
		super(props)
		this.state = this.getStartingState()
	}

	render() {
		return (
			<div>
				<div>
		  			<PlayerEntry 
		  				playerName = "Thomas" 
		  				score = {this.state.scores[0]} 
		  				scoreButtonClick = {(value) => { this.changeScore(0, value) }}
		  			/>
		  			<PlayerEntry 
		  				playerName = "Kim" 
		  				score = {this.state.scores[1]} 
		  				scoreButtonClick = {(value) => { this.changeScore(1, value) }}
		  			/>
		  			<PlayerEntry 
		  				playerName = "Player 3" 
		  				score = {this.state.scores[2]} 
		  				scoreButtonClick = {(value) => { this.changeScore(2, value) }}
		  			/>
		  			<PlayerEntry 
		  				playerName = "Player 4" 
		  				score = {this.state.scores[3]} 
		  				scoreButtonClick = {(value) => { this.changeScore(3, value) }}
		  			/>
		  		</div>
		  		<div className ="summary-section">
		  			<h3>Round {this.state.rounds} </h3>
		  			<button onClick = {() => this.endRound()}>End round</button>
		  			<button onClick = {() => this.reset() }>Reset</button>
		  		</div>
		  	</div>
  		);
	}

	endRound() {
		this.setState({rounds: this.state.rounds + 1})
	}
	getStartingState() {
		const startingScore = [0, 0, 0, 0];
		return {
      		rounds: 1,
      		scores: startingScore,
      	};
	}

	reset() {
      	this.setState(this.getStartingState());
	}

	changeScore(player, value) {
		const scores = this.state.scores.slice();
    	scores[player] += parseInt(value);
    	this.setState({scores: scores});
	}
}

// ========================================

ReactDOM.render(
	(
  		<MutererGame />
  	),
  	document.getElementById('root')
);
